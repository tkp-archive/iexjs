# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

import json
# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
import os
import os.path

import sphinx_rtd_theme
from recommonmark.transform import AutoStructify

# -- Project information -----------------------------------------------------

project = 'iexjs'
copyright = '2021, IEX Cloud'
author = 'IEX Cloud'

# The full version, including alpha/beta/rc tags
with open("../package.json", "r") as fp:
    release = json.load(fp)["version"]

# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    "sphinx_js",
    "sphinx.ext.viewcode",
    "recommonmark",
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store", "api"]

source_suffix = [".rst", ".md"]

master_doc = "index"


# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
# html_theme = 'alabaster'
html_theme = "sphinx_rtd_theme"
html_theme_path = [sphinx_rtd_theme.get_html_theme_path()]

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']

# -----------
js_source_path = '../src/js'
primary_domain = 'js'


def run_copyreadme(_):
    out = os.path.abspath(os.path.join(os.path.dirname(__file__), "index.md"))
    readme = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "README.md"))
    with open(out, "w") as fp1:
        with open(readme, "r") as fp2:
            fp1.write("# iexjs \n\n")
            for line in fp2:
                if "src=" in line and line.startswith("#"):
                    # <img> header
                    fp1.write(line[1:] + "\n")
                elif "src=" in line and "raw.githubusercontent" not in line:
                    # <img>
                    fp1.write(line.replace("docs/", ""))
                elif "](docs/" in line:
                    # md
                    fp1.write(line.replace("](docs/", "]("))
                else:
                    fp1.write(line)

        fp1.write(
            """

```eval_rst

API Documentation
==================


.. toctree::
   :maxdepth: 2

   apisrc/client

```"""
        )


def setup(app):
    app.add_config_value(
        "recommonmark_config",
        {
            "auto_toc_tree_section": "Contents",
        },
        True,
    )
    app.add_transform(AutoStructify)
    app.connect("builder-inited", run_copyreadme)
