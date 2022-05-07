## JavaScript Security - Best Practices

___

#### Basic Notions of Web Security

* __Attackers__: - Capable and motivated
* __Vulnerabilities__: - Flaws in code and configuration
* __Data Breaches__: - Steal data or abuse functionality

#### How Browsers Execute JavaScript Code

* Code is downloaded
* Each site gets a sandbox
* Multiple security measures
    * OS process separation
    * HTTPS
    * Subresource Integrity (SRI)

#### Browser Sandbox

JavaScript code running in the browser is restricted

* __No local resource__: No direct access to devices, files and local network
* __Only browser APIs__: Limited access to resources allowed by the user
* __Same origin only__: Code and data from different sites cannot interact

#### JavaScript Security Pitfalls

* __DYNAMIC TYPE SYSTEM__: Abusing conversions and comparisons
* __DYNAMIC CODE EXECUTION__: Interpreting untrusted data as code
* __PROTOTYPAL INHERITANCE__: Modifying behaviour of child objects

#### Dynamic Type System Pitfalls

* __Automatic conversions__: Unexpected code may be executed
* __Loose comparisons__: Security checks may be bypassed

#### Dynamic Code Execution

JavaScript code can be loaded from Web, files or user input. <br>

* __Parse__: Transform source code into abstract syntax tree
* __Compile__: Generate bytecode just-in-time
* __Execute__: Run bytecode instructions

#### Unsafe Browser API

* __setTimeout__: Execute provided code after a specified delay
* __setInterval__: Repeatedly execute provided code with a specified delay between executions

### Defending against prototype pollution

___

#### Inheritance Models

___

* __Classes__: Static hierarchy of types
* __Prototypes__: Dynamic chain of objects

#### Prototype Chain

* Each object has a prototype
* The chain ends will `null`
* Inherited properties
* Only own properties are mutated

#### Polluting the Object Prototype

* Denial of service
* for-in __loop manipulation__
* Property injection
    * Security check bypass
    * SQL and NoSQL injections
* Remote code execution

#### Prototype Pollution Code Smells

* Property mutation with untrusted key and value
* Recursive object merging
* Object cloning
* Property access by path

#### Fixing the code

* Validate JSON schema
* Freeze the prototype
    * Object.freeze
* Create objects without prototype
    * Object.create(null, ...)
* Use Map __instead of__ {}

### Testing Our Code

___

#### Security Testing Techniques

* __SAST__ Static application security testing
    * Source code
    * Known bad code patterns
    * Safe
    * Compilers, linters, scanners
* __DAST__ Dynamic application security testing
    * Running application
    * Malicious payloads
    * May be destructive
    * Automated tests and scanners
* __IAST__ Interactive application security testing
