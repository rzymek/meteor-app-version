Generates a global variable holding the value of `git describe --tags`.
The name of the variable is equal to the filename.
Also on the client a global UI helper is defined with the same name.

## Usage ##

Create a file `AppVersion.version` (can be empty).  
To display application version in your template use:

    Version: {{AppVersion}}

