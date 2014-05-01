class javascript {

    case $operatingsystem {
        ubuntu: {

            include apt

            apt::ppa { 'ppa:chris-lea/node.js':
                before => Class['nodejs']
            }
        }
    }

    class { 'nodejs':
        version => 'present'
    }

    package { 'bower':
        provider => npm,
        ensure => installed,
        require => Class['nodejs']
    }

    #exec { 'nodemon':
    #    command => "npm install nodemon -g",
    #    cwd => $PROJ_DIR,
    #    path => $PATH,
    #    logoutput => on_failure,
    #    require => Class['nodejs']
    #}

    exec { "npm_install":
        command => "npm install --no-bin-links",
        cwd => $PROJ_DIR,
        path => $PATH,
        logoutput => on_failure,
        require => Class['nodejs']
    }

    exec { "bower_install":
        command => "bower install --allow-root",
        cwd => $PROJ_DIR,
        path => $PATH,
        logoutput => on_failure,
        require => Class['nodejs']
    }

    #package { 'grunt-cli':
    #    provider => npm,
    #    ensure => installed,
    #    require => Class['nodejs']
    #}
    #package { 'yo':
    #    provider => npm,
    #    ensure => installed,
    #    require => Class['nodejs']
    #}
    #package { 'generator-angular':
    #    provider => npm,
    #    ensure => installed,
    #    require => Package['yo']
    #}
}
