macro r {

  // r(div, {prop1: 'div-1'}, ...)
  // r(foo, {prop1: 'foo-1'}, ...)
  //
  case {_ ($name, $x:expr (,) ...)} => {
    var _ = require('lodash');
    var name = unwrapSyntax(#{$name});
    isTag = _.includes(['div', 'span', 'h1', 'h2'], name);
    letstx $nameStx = isTag ? [makeValue(name, null)] : #{$name};
    return #{React.createElement($nameStx, $x (,) ...)}
  }

  // r(foo.bar, {prop1: 'bar-1')
  // r(foo)
  //
  rule {($x:expr (,) ...)} => {React.createElement($x (,) ...)}
}

export r;
