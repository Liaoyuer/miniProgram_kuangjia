core = {
  MAX_VALUE: 10,
  goPage: function(e) {
      var r = getCurrentPages(), a = r.length, t = "", o = {}, i = e.url;
      for (var l = 0; l < a; l++) if (r[l].route == i) {
          t = l + 1;
          break;
      }
      if (t) wx.navigateBack({
          delta: a - t
      }); else {
          if (e.data) for (var g in i += "?v=2018", o = e.data) i += "&" + g + "=" + o[g];
          a < this.MAX_VALUE ? wx.navigateTo({
              url: "/" + i
          }) : wx.redirectTo({
              url: "/" + i
          });
      }
  }
}, module.exports = core;