macro r {

  case {_ ($name, $x:expr (,) ...)} => {
    var _ = require('lodash');
    var name = unwrapSyntax(#{$name});
    isTag = _.includes(['div', 'h1', 'h2'], name);
    letstx $nameStx = isTag ? [makeValue(name, null)] : #{$name};
    return #{React.createElement($nameStx, $x (,) ...)}
  }

  rule {($x:expr (,) ...)} => {React.createElement($x (,) ...)}
}

export r;
