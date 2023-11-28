<!-- markdownlint-disable-file MD024 -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- Add scraping functionality which will include Title, Syntax, Expiry date & other relevant properties along with Raw data.

## [3.0.0] - 2023-11-28

### Changed

- Use Node `fetch()` instead of `https.request()`.

### Removed

- Remove Support for Node versions less than 18. **Breaking Change!**
- Remove UMD Package. **Breaking Change!**

### Fixed

- Changelog language inconsistency.
- Fixed types problem.

## [2.0.0] - 2022-11-05

### Added

- Authentication Support.
- Ability to disable 1 second delay.
- Auto truncate paste title to first 100 characters.

### Changed

- Function names from UpperPascalCase to lowerPascalCase. **Breaking Change!**
- Rewrite whole source code to be zero dependency module and to follow dpaste API specification. **Breaking Change!**
- `createPaste()` now accepts one object as parameter instead of multiple parameters. **Breaking Change!**
- `getRawPaste()` now accepts 2nd parameter `APIToken`.

## [1.0.4] - 2021-11-20

### Fixed

- Fix types not being imported. (Moved interfaces.ts to index.ts. Should fix the TSlinter problems.)

## [1.0.3] - 2021-11-19

### Fixed

- Interfaces.ts not getting imported.

## [1.0.2] - 2021-11-19

### Added

- Github Sponsors config.

### Changed

- Description.

## [1.0.1] - 2021-11-19

### Removed

- Checkers.ts file. Error handling functionality is directly borne by API itself.

## [1.0.0] - 2021-11-19

### Added

- Initial Release.
