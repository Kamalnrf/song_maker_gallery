# 2.1.2

- Configure email in production for real password reset functionality (#27)
- Configured and began writing frontend unit tests with jest and React Testing
  Library.
- Improvements for contributors
  - Single boolean switch to go from dbsqlite to mysql in
    `development_settings.py`
  - Continue to maintain `dev_setup.sh`, which is not more descriptive and runs
    new frontend test suite on setup.
- Misc but fixes (#13, #20)

# 2.1.1

- Fix spreadsheet parsing bugs on the backend, mostly related to handling
  names with extra whitespace.
- Issue #21: Better error messages for invalid spreadsheets. The site will now
  provide a detailed "traceback" identifying each error and which row the
  error occurred on.
  - missing name or link values
  - invalid links
- Validate group name length to enforce 15 character limit. Update CSS to
  make group names always display nicely.
- Scripts for development and dev ops
  - Automated database backup
  - Automated construction and destruction of mysql database through Docker
    for easy testing
- Misc bug fixes (#23, #15, #26)
