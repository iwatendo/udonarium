/* Generated by Opal 0.10.5 */
(function(Opal) {
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass;

  Opal.add_stubs(['$==', '$<=', '$>=', '$-']);
  return (function($base, $super) {
    function $Pendragon(){};
    var self = $Pendragon = $klass($base, $super, 'Pendragon', $Pendragon);

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_2, TMP_3, TMP_4;

    Opal.defn(self, '$gameName', TMP_1 = function $$gameName() {
      var self = this;

      return "ペンドラゴン";
    }, TMP_1.$$arity = 0);

    Opal.defn(self, '$gameType', TMP_2 = function $$gameType() {
      var self = this;

      return "Pendragon";
    }, TMP_2.$$arity = 0);

    Opal.defn(self, '$getHelpMessage', TMP_3 = function $$getHelpMessage() {
      var self = this;

      return "クリティカル、成功、失敗、ファンブルの自動判定を行います。\n";
    }, TMP_3.$$arity = 0);

    return (Opal.defn(self, '$check_1D20', TMP_4 = function $$check_1D20(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var $a, $b, self = this;

      if ((($a = (signOfInequality['$==']("<="))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        return ""
      };
      if ((($a = ($rb_le(total_n, diff))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        if ((($a = (((($b = ($rb_ge(total_n, ($rb_minus(40, diff))))) !== false && $b !== nil && $b != null) ? $b : (total_n['$=='](diff))))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          return " ＞ クリティカル"};
        return " ＞ 成功";
        } else {
        if ((($a = (total_n['$=='](20))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          return " ＞ ファンブル"};
        return " ＞ 失敗";
      };
    }, TMP_4.$$arity = 8), nil) && 'check_1D20';
  })($scope.base, $scope.get('DiceBot'))
})(Opal);

/* Generated by Opal 0.10.5 */
(function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return $scope.get('Kernel').$exit()
})(Opal);