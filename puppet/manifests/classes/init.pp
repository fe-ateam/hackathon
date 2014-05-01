# stage {"pre": before => Stage["main"]} class {'apt': stage => 'pre'}

# Commands to run before all others in puppet.
class init {
    group { 'puppet':
        ensure => 'present',
    }

    case $operatingsystem {
        ubuntu: {

            exec { 'update_apt':
                command => "sudo apt-get update"
            }

            package { 'install_dev_libs':
                name => [
                    'software-properties-common',
                    'python-software-properties',
                    'g++',
                    'make',
                    'curl',
                    'build-essential',
                    'git-core'
                ],
                ensure => present,
                require => Exec['update_apt']
            }

            # In case port 9418 is blocked, use https:// instead of git://
            exec { 'git_use_https_instead_of_git':
                command => 'git config --global url."https://".insteadOf git://',
                require => Package['install_dev_libs']
            }
        }
    }
}
