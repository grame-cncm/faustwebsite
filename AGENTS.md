# AGENTS.md — working on the Faust website

This repository is the source of <https://faust.grame.fr>, built with
mkdocs. Rules for coding agents (and humans in a hurry).

## General rules

- Edit the sources under `mkdocs/`. `site/` and `docs/` are build outputs,
  ignored by git: never commit them.
- Never delete `mkdocs/docs/CNAME`: the deployed site needs it.
- Pushing to `master` deploys the site (GitHub Actions, `.github/workflows/docs.yml`).
  Do not commit, push or download files without an explicit request.
- Preview with `make serve` (mkdocs on <http://localhost:8000>, reloaded on
  every change).

## Adding projects to "Powered by Faust"

The page is `mkdocs/docs/community/powered-by-faust.md`, its screenshots are in
`mkdocs/docs/community/powered-by-faust/img/`, and its world map markers are in
`mkdocs/docs/js/map.js`. A project needs an entry on the page; a screenshot
and a map marker are added whenever they are available.

### 1. Find candidates with `faust-gh-search.sh`

`faust-gh-search.sh` (installed in `/usr/local/bin`, not in this repository)
lists the projects that use Faust, most recent first: GitHub repositories,
but also projects on other forges, in package registries and in Linux
distributions. It needs an authenticated `gh` CLI, and `curl` and `jq` for
the other sources. `faust-gh-search.sh --help` prints the full usage:

```
faust-gh-search.sh [MODE] [LIMIT] [DAYS] [pushed|created]
```

| argument | values |
| :--- | :--- |
| `MODE` | `repos`: GitHub topics, `language:Faust`, keywords in name, description and README (about 2 min); `code`: GitHub code search for `.dsp` files, generated code, faustwasm, libfaust, architectures, faust2xxx, `pkg:faust` imports, Cmajor patches, CI and build files... (15 to 20 min, code search quota); `ext`: everything the GitHub search API does not see, `forges` + `pkgs` + Sourcegraph (about 5 min); `all` (default): `repos` + `code` + `ext`; `forges`: GitLab instances (gitlab.com, framagit, Inria, IEM, CCRMA), Gitea/Forgejo (Codeberg, gitea.com) and SourceHut; `pkgs`: npm, crates.io, ecosyste.ms (packages with the `faust` keyword on every registry, and repositories of any forge that depend on a Faust package), the "Used by" pages of GitHub, AUR and Arch Linux packages built with faust; `wasm`: web and npm projects only; `deep`: wide code queries split by file size (30 to 60 min); `papers`: articles that cite the Faust reference publications (OpenAlex), its own table `DATE CIT TITLE SOURCE` then the URL |
| `LIMIT` | results per query, default 300, at most 1000 |
| `DAYS` | recency window in days, default 365, `0` for no limit |
| `SORT` | `pushed` (default): repositories with recent commits; `created`: new repositories |

Typical runs, saving the table to a file outside this repository:

```sh
FAUST_GH_NEW=1 faust-gh-search.sh all 300 30 > ~/FAUST_GH.txt   # new projects active in the last 30 days
faust-gh-search.sh ext 300 0 > ~/FAUST_GH.txt                    # other forges and registries, no time limit
faust-gh-search.sh papers 300 365 > ~/FAUST_PAPERS.txt           # articles of the last year
```

Each project takes two lines: `+ REPO STARS PUSHED CREATED LANG F% SRC
DESCRIPTION`, then its URL. Outside GitHub, `REPO` carries the host
(`gitlab.com/owner/name`), or is a website or a package page when that is all
a registry gives. `F%` is the share of the code that the forge classifies as
Faust (GitHub, GitLab and Gitea measure it; `-` elsewhere). `SRC` says how
the project was found:

- Faust code or tooling detected in a GitHub repository: `dsp`, `fau`,
  `old`, `lib`, `emb`, `cgf`, `ffl`, `wasm`, `cdn`, `lfa`, `arch`, `gen`,
  `cs`, `f2x`, `bld`, `dd`, `rs`, `fpk` (`import("pkg:faust/...")`), `cmj`
  (Cmajor patch loading a `.dsp`);
- dependencies: `use` (depends on a Faust package, from ecosyste.ms), `dep`
  (GitHub "Used by"), `aur` and `pac` (Arch packages built with or depending
  on faust), `npm`, `crt`, `reg` (packages that mention Faust and audio);
- other indexes and forges: `sg` (Sourcegraph code search), `gl` and `gt`
  (GitLab and Gitea projects whose name or description speaks of Faust and
  audio), `srht` (SourceHut);
- weaker signals: `top`, `lng`, `kw`, `rdm`, `url` (topic, main language,
  keyword, README, link).

Several sources make a more reliable hit. Useful environment variables:
`FAUST_GH_SKIP` (owners or repositories left out; the default leaves out
`grame-cncm` and the package trees of the distributions), `FAUST_GH_FORKS=1`,
`FAUST_GH_ARCHIVED=0`, `FAUST_GH_WEAK=1`, `FAUST_GH_TSV=1`, `FAUST_GH_NEW=1`
(only the projects marked `+`), `FAUST_GL_TOKEN` (a gitlab.com token:
without it, gitlab.com allows only a few dozen anonymous requests per hour
and is skipped once they are spent). Codeberg and gitea.com sometimes refuse
anonymous search; the script then skips them and says so.

### 2. Remove the projects already on the page

The script marks with `+` the projects it has never shown before (history in
`~/.cache/faust-gh-search/seen.tsv`) and whose URL is not on this page
(`FAUST_GH_KNOWN`, which defaults to this page when the repository sits in
`~/Developpements/faustwebsite`). A project shown once is no longer marked:
keep the output of a run until its candidates are vetted. The URL
comparison does not catch everything: look for the project name too, since
many entries link to the project's website instead of its repository, or to
the repository of a related project of the same author.

### 3. Vet each candidate

Read the README and look at the code. Keep a project only if:

- it really uses Faust: `.dsp` files, code generated by Faust, faustwasm,
  libfaust, the Faust libraries. `language:Faust` alone is not proof: GitHub
  also classifies as Faust the ANSYS APDL scripts, iDempiere ZK themes and
  webMethods DSP pages, and "Faust" is also a Python stream processing
  library and a video game;
- it is finished enough to be shown: a working program, plugin, library,
  tool, piece or documented study. Leave out empty repositories, forks and
  mirrors, course exercises, templates with no content, scratch and test
  repositories;
- it is not one of the official GRAME repositories.

When in doubt, list the candidate with the reason and let the maintainer
decide.

### 4. Collect the information

- the project's name and its link: the website if there is one, else the repository;
- the author (name and profile or site), the license, the source link;
- what the project does, and what Faust does in it, concretely (which
  `.dsp` files, which target, which library functions);
- a screenshot or photo, from the README or the project's website;
- the location of the author or organization, only if it is public (GitHub
  profile, website). Never guess a location from a name.

### 5. Write the entry

New entries go at the top of `## Other projects`; commercial products go in
`## Commercial applications`. Follow the existing entries:

```markdown
### [Project](https://project.example)

<div><a href="https://project.example"><img width="60%" class="mx-auto d-block" src="img/project.jpg" alt="What the screenshot shows"></a> </div>

[Project](https://project.example) by [Author](https://github.com/author) (MIT, [source](https://github.com/author/project)) is ... Faust is used for ...
```

- One `###` heading per project; the map statistics count the `h3`/`h4`
  sections after the map, so do not add other headings there.
- The image block is omitted when there is no screenshot. The `width`
  (25% to 60%) fits the shape of the image; the `alt` text describes it.
- One paragraph, in plain English, that says what the project is and then
  what Faust does in it. Link to other entries of the page by their anchor
  (`[HISE](#hise)`).

### 6. Screenshots

Download only with the maintainer's agreement. Save a JPEG of about 600 to
700 pixels wide, under about 100 KB, in
`mkdocs/docs/community/powered-by-faust/img/`, named after the project
(lowercase, hyphens). It must show the project itself (its interface, its
hardware, a demonstration), not a logo or an index page.

### 7. Map marker

Add a line at the top of the `// Add project markers` block of
`mkdocs/docs/js/map.js`:

```js
addMarker(48.7758, 9.1829, '<a href="#project">Project</a>, Stuttgart, Germany', blueIcon);
```

- `#project` is the anchor mkdocs generates for the heading: lowercase,
  spaces become hyphens, punctuation and non-ASCII letters are dropped
  (`Faust Runner for VS Code` gives `#faust-runner-for-vs-code`, `Garsæ`
  gives `#gars`). Check it in the built page.
- Use the city's coordinates; when only the country is known, use the
  country's center and write only the country.
- No public location, no marker: the page lists the projects not located yet
  by itself.
- `redIcon` is reserved for the sites (GRAME, CCRMA).

### 8. Check

Run `make serve` and open
<http://localhost:8000/community/powered-by-faust/>. Under the map, the
project count must have grown by the number of new entries, and no line
"Markers linking to a missing section" may appear. Check that every new
image shows and every link works.

### 9. Commit

One commit per batch, titled `Add N projects to Powered by Faust` (or `Add
<Project> to Powered by Faust`). Its message lists the projects, says how
they were found (`faust-gh-search.sh` mode and window), how many screenshots
and markers were added, and why the others have none. Commit only the page,
its images and `map.js`.
