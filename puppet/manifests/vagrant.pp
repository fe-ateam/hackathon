#
# puppet magic for dev boxes
#
import "classes/*.pp"

$PROJ_DIR = "/vagrant"
$HOME_DIR = "/home/vagrant"
$PATH = "/usr/local/bin:/usr/bin:/usr/sbin:/sbin:/bin"

Exec {
    path => $PATH,
}

class dev {
    class {
        init:;
        javascript: require => Class[init];
        mongodb_install: require => Class[init];
        #custom: require => Class[init];
    }
}

include dev

