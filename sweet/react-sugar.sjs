macro genVar {
  case {$name ($varName, $varVal:expr, $name2)} => {
    letstx $ident = [makeIdent(unwrapSyntax(#{$varName}), #{$name2})];
    return #{var $ident = $varVal}
  }
}

macro reactSugar {
  case {$name ()} => {
    return #{
      genVar('createClass', React.createClass, $name);
      genVar('createElement', React.createElement, $name);
      genVar('render', React.render, $name);
      genVar('div', React.DOM.div, $name);
      genVar('h1', React.DOM.h1, $name)
    }
  }
}

export reactSugar;
