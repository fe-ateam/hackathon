mean
====

* Source code - [Github](https://github.com/fe-ateam/mean.git)
* Author - Wenjuan (David) Cai - <w.david.cai@gmail.com>

About
-----

This project provides a [Ubuntu (12.04) 64](http://releases.ubuntu.com/precise/) [Vagrant](http://www.vagrantup.com/) Virtual Machine (VM) with a MEAN stack -- [MongoDB](https://www.mongodb.org/), [Express](http://expressjs.com/), [AngularJS](https://angularjs.org/), and [NodeJS](http://nodejs.org/) for web development. It also installs the following software:

* [bower](http://bower.io/)
* [jQuery](http://jquery.com/)
* [bootstrap](http://getbootstrap.com/)
* [angular-bootstrap](https://github.com/angular-ui/bootstrap)
* [angular-animate](https://docs.angularjs.org/guide/animations)
* [d3](http://d3js.org/)

There are [Puppet](http://puppetlabs.com) scripts that automatically install the above software when the VM is started.

Installation
------------

1. Install [Oracle VirtualBox](https://www.virtualbox.org/wiki/Downloads)

2. Install [Vagrant](http://www.vagrantup.com/downloads.html)

3. Clone this repository

  ```
  git clone https://github.com/fe-ateam/mean.git
  ```

Running
-------

1. To start the virtual machine(VM), type

  ```bash
  cd mean
  vagrant up
  ```

  This will take a while to install Ubuntu and all required software.

2. Connect to the virtual machine (guest machine)

  ```
  vagrant ssh
  ```

3. Go to the project root directory

  ```bash
  cd /vagrant
  ```

4. To start the node server, type

  ```
  node server.js
  ```

5. Open browser on the host machine and visit `http://localhost:3000`

Termination
-----------

1. Type `Ctrl+C` to stop the node server if the server is running

2. Type `exit` to logout the virtual machine

3. To stop the virtual machine, type

  ```
  vagrant halt
  ```

4. To physically remove the virtual machine (not necessary in most cases), type

  ```
  vagrant destroy
  ```

