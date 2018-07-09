require = function() {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }
        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function(r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }
      return n[i].exports;
    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o;
  }
  return r;
}()({
  DataMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "768c6ZMZyRBRasPTZNSz46o", "DataMgr");
    "use strict";
    var DataMgr = cc.Class({
      name: "DataMgr",
      data: null,
      ctor: function ctor() {
        this.name = "DataMgr";
      },
      loadData: function loadData(callback) {
        var url = "TextData/data";
        var self = this;
        cc.loader.loadRes(url, function(err, res) {
          if (err) cc.log(err); else {
            self.data = res;
            null != callback && callback();
          }
        });
      },
      getDataBasic: function getDataBasic() {
        if (this.data) {
          cc.log("data basic loaded");
          return this.data.basic;
        }
        cc.log("data not loaded");
        return null;
      },
      getDataSkill: function getDataSkill() {
        if (this.data) return this.data.skills;
        cc.log("data not loaded");
        return null;
      },
      getDataEdu: function getDataEdu() {
        if (this.data) return this.data.education;
        cc.log("data not loaded");
        return null;
      },
      getDataExp: function getDataExp() {
        if (this.data) return this.data.experience;
        cc.log("data not loaded");
        return null;
      },
      getDataProj: function getDataProj() {
        if (this.data) return this.data.projects;
        cc.log("data not loaded");
        return null;
      },
      getDetailByKey: function getDetailByKey(key) {
        if (this.data) return this.data.details[key];
        cc.log("data not loaded");
        return null;
      }
    });
    DataMgr._instance = null;
    DataMgr.getInstance = function() {
      DataMgr._instance || (DataMgr._instance = new DataMgr());
      return DataMgr._instance;
    };
    module.exports = DataMgr;
    cc._RF.pop();
  }, {} ],
  ItemEdu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3b9cWDh6pDk6LSRvFYAm7C", "ItemEdu");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        labelYear: {
          default: null,
          type: cc.Label
        },
        labelUniversity: {
          default: null,
          type: cc.Label
        },
        labelMajor: {
          default: null,
          type: cc.Label
        },
        labelDes: {
          default: null,
          type: cc.Label
        },
        icon: {
          default: null,
          type: cc.Sprite
        }
      },
      start: function start() {},
      setData: function setData(data) {
        if (!data) return;
        this.data = data;
        this.labelYear.string = this.data.from.toString() + " - " + this.data.to.toString();
        this.labelUniversity.string = this.data.university;
        this.labelMajor.string = this.data.major;
        this.labelDes.string = this.data.detail;
        var iconPath = "Sprites/icons/" + this.data.icon;
        var self = this;
        cc.loader.loadRes(iconPath, cc.SpriteFrame, function(err, texture) {
          cc.log(self.icon);
          cc.log(texture);
          self.icon.spriteFrame = texture;
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  ItemExp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7ddf2I7ZFxMZ7iu6S2xgvUD", "ItemExp");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        labelYear: {
          default: null,
          type: cc.Label
        },
        labelCompany: {
          default: null,
          type: cc.Label
        },
        labelPosition: {
          default: null,
          type: cc.Label
        },
        labelDes: {
          default: null,
          type: cc.Label
        },
        icon: {
          default: null,
          type: cc.Sprite
        }
      },
      start: function start() {},
      setData: function setData(data) {
        if (!data) return;
        this.data = data;
        this.labelYear.string = this.data.from.toString() + " - " + this.data.to.toString();
        this.labelCompany.string = this.data.company;
        this.labelPosition.string = this.data.position;
        this.labelDes.string = this.data.detail;
        var iconPath = "Sprites/icons/" + this.data.icon;
        var self = this;
        cc.loader.loadRes(iconPath, cc.SpriteFrame, function(err, texture) {
          cc.log(self.icon);
          cc.log(texture);
          self.icon.spriteFrame = texture;
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  ItemProj: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "14587KcVi9KZqoNYczENZyA", "ItemProj");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        labelYear: {
          default: null,
          type: cc.Label
        },
        labelName: {
          default: null,
          type: cc.Label
        },
        labelDes: {
          default: null,
          type: cc.Label
        },
        labelLink: {
          default: null,
          type: cc.Label
        },
        image: {
          default: null,
          type: cc.Sprite
        }
      },
      start: function start() {},
      setData: function setData(data) {
        if (!data) return;
        this.data = data;
        this.labelYear.string = this.data.from.toString() + " - " + this.data.to.toString();
        this.labelName.string = this.data.name;
        this.labelLink.string = this.data.link;
        this.labelDes.string = this.data.detail;
        var imagePath = "Sprites/icons/" + this.data.image;
        var self = this;
      }
    });
    cc._RF.pop();
  }, {} ],
  ItemSkill: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9f5b8RjfHhKWom9e0UPpwYZ", "ItemSkill");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        labelTitle: {
          default: null,
          type: cc.Label
        },
        labelDes: {
          default: null,
          type: cc.Label
        },
        icon: {
          default: null,
          type: cc.Sprite
        }
      },
      start: function start() {},
      setData: function setData(data) {
        if (!data) return;
        this.data = data;
        this.labelTitle.string = this.data.item;
        this.labelDes.string = this.data.detail;
        var iconPath = "Sprites/icons/" + this.data.icon;
        var self = this;
        cc.loader.loadRes(iconPath, cc.SpriteFrame, function(err, texture) {
          cc.log(self.icon);
          cc.log(texture);
          self.icon.spriteFrame = texture;
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  LayoutCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "280c3rsZJJKnZ9RqbALVwtK", "LayoutCtrl");
    "use strict";
    var DataMgr = require("DataMgr");
    cc.Class({
      extends: cc.Component,
      properties: {
        label: {
          default: null,
          type: cc.Label
        },
        text: "Hello, World!",
        time: 1
      },
      onLoad: function onLoad() {
        this.label.string = this.text;
        DataMgr.getInstance().loadData();
      },
      update: function update(dt) {
        this.time = this.time + 1;
        100 == this.time && (this.time = 1);
        this.label.string = "Hello, World!  " + this.time;
      }
    });
    cc._RF.pop();
  }, {
    DataMgr: "DataMgr"
  } ],
  PageBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d09cd6H6wJFf6ryf3L1nqKT", "PageBase");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {},
      initWithData: function initWithData() {},
      onEnter: function onEnter() {},
      onExit: function onExit() {}
    });
    cc._RF.pop();
  }, {} ],
  PageBasic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "11005ky6JxEpZK9oiZe5Axc", "PageBasic");
    "use strict";
    var DataMgr = require("DataMgr");
    cc.Class({
      extends: require("PageBase"),
      properties: {
        infoItemTemplate: {
          default: null,
          type: cc.Node
        },
        basicInfoRoot: {
          default: null,
          type: cc.Node
        }
      },
      start: function start() {},
      initWithData: function initWithData() {
        this.data = DataMgr.getInstance().getDataBasic();
        if (null == this.data) return false;
        for (var i = 0; i < this.data.info.length; ++i) {
          var itemObj = cc.instantiate(this.infoItemTemplate);
          itemObj.active = true;
          this.basicInfoRoot.addChild(itemObj);
          var item = itemObj.getChildByName("item");
          var info = itemObj.getChildByName("info");
          var itemData = this.data.info[i];
          item.getComponent("cc.Label").string = itemData.item;
          info.getComponent("cc.Label").string = itemData.info;
        }
        return null != this.data;
      },
      onEnter: function onEnter() {
        cc.log("PageBasic onEnter");
        if (!this.data && !this.initWithData()) return;
      },
      onExit: function onExit() {
        cc.log("PageBasic onExit");
      }
    });
    cc._RF.pop();
  }, {
    DataMgr: "DataMgr",
    PageBase: "PageBase"
  } ],
  PageEdu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "74f8fZkxOVFSI33yyUXt8AU", "PageEdu");
    "use strict";
    var DataMgr = require("DataMgr");
    cc.Class({
      extends: require("PageBase"),
      properties: {
        itemTemplate: {
          default: null,
          type: cc.Node
        },
        scrollView: {
          default: null,
          type: cc.ScrollView
        }
      },
      start: function start() {},
      initWithData: function initWithData() {
        this.data = DataMgr.getInstance().getDataEdu();
        if (null == this.data) return false;
        if (!this.inited) {
          this.initScrollview();
          this.inited = true;
        }
        return true;
      },
      initScrollview: function initScrollview() {
        this.itemRoot = this.scrollView.content;
        for (var i = 0; i < this.data.length; ++i) {
          var itemObj = cc.instantiate(this.itemTemplate);
          itemObj.active = true;
          this.itemRoot.addChild(itemObj);
          var item = itemObj.getComponent("ItemEdu");
          item.setData(this.data[i]);
        }
      },
      onEnter: function onEnter() {
        cc.log("PageEdu onEnter");
        if (!this.data && !this.initWithData()) return;
        cc.log("len = " + this.data.length);
      },
      onExit: function onExit() {
        cc.log("PageEdu onExit");
      }
    });
    cc._RF.pop();
  }, {
    DataMgr: "DataMgr",
    PageBase: "PageBase"
  } ],
  PageExp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3750dgV/2dARKEFM9rvXlea", "PageExp");
    "use strict";
    var DataMgr = require("DataMgr");
    cc.Class({
      extends: require("PageBase"),
      properties: {
        itemTemplate: {
          default: null,
          type: cc.Node
        },
        scrollView: {
          default: null,
          type: cc.ScrollView
        }
      },
      start: function start() {},
      initWithData: function initWithData() {
        this.data = DataMgr.getInstance().getDataExp();
        if (null == this.data) return false;
        if (!this.inited) {
          this.initScrollview();
          this.inited = true;
        }
        return true;
      },
      initScrollview: function initScrollview() {
        this.itemRoot = this.scrollView.content;
        for (var i = 0; i < this.data.length; ++i) {
          var itemObj = cc.instantiate(this.itemTemplate);
          itemObj.active = true;
          this.itemRoot.addChild(itemObj);
          var item = itemObj.getComponent("ItemExp");
          item.setData(this.data[i]);
        }
      },
      onEnter: function onEnter() {
        cc.log("PageExp onEnter");
        if (!this.data && !this.initWithData()) return;
        cc.log("len = " + this.data.length);
      },
      onExit: function onExit() {
        cc.log("PageExp onExit");
      }
    });
    cc._RF.pop();
  }, {
    DataMgr: "DataMgr",
    PageBase: "PageBase"
  } ],
  PageProj: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bb686lGcTtG4YWpA693znc8", "PageProj");
    "use strict";
    var DataMgr = require("DataMgr");
    cc.Class({
      extends: require("PageBase"),
      properties: {
        itemTemplate: {
          default: null,
          type: cc.Node
        },
        scrollView: {
          default: null,
          type: cc.ScrollView
        }
      },
      start: function start() {},
      initWithData: function initWithData() {
        this.data = DataMgr.getInstance().getDataProj();
        if (null == this.data) return false;
        if (!this.inited) {
          this.initScrollview();
          this.inited = true;
        }
        return true;
      },
      initScrollview: function initScrollview() {
        this.itemRoot = this.scrollView.content;
        for (var i = 0; i < this.data.length; ++i) {
          var itemObj = cc.instantiate(this.itemTemplate);
          itemObj.active = true;
          this.itemRoot.addChild(itemObj);
          var item = itemObj.getComponent("ItemProj");
          item.setData(this.data[i]);
        }
      },
      onEnter: function onEnter() {
        cc.log("PageProj onEnter");
        if (!this.data && !this.initWithData()) return;
        cc.log("len = " + this.data.length);
      },
      onExit: function onExit() {
        cc.log("PageProj onExit");
      }
    });
    cc._RF.pop();
  }, {
    DataMgr: "DataMgr",
    PageBase: "PageBase"
  } ],
  PageSkill: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "865dbyOQfhFLLHiToD9vNV8", "PageSkill");
    "use strict";
    var DataMgr = require("DataMgr");
    cc.Class({
      extends: require("PageBase"),
      properties: {
        itemTemplate: {
          default: null,
          type: cc.Node
        },
        scrollView: {
          default: null,
          type: cc.ScrollView
        }
      },
      start: function start() {},
      initWithData: function initWithData() {
        this.data = DataMgr.getInstance().getDataSkill();
        if (null == this.data) return false;
        if (!this.inited) {
          this.initScrollview();
          this.inited = true;
        }
        return true;
      },
      initScrollview: function initScrollview() {
        this.itemRoot = this.scrollView.content;
        for (var i = 0; i < this.data.length; ++i) {
          var itemObj = cc.instantiate(this.itemTemplate);
          itemObj.active = true;
          this.itemRoot.addChild(itemObj);
          var item = itemObj.getComponent("ItemSkill");
          item.setData(this.data[i]);
        }
      },
      onEnter: function onEnter() {
        cc.log("PageSkill onEnter");
        if (!this.data && !this.initWithData()) return;
      },
      onExit: function onExit() {
        cc.log("PageSkill onExit");
      }
    });
    cc._RF.pop();
  }, {
    DataMgr: "DataMgr",
    PageBase: "PageBase"
  } ],
  TabsCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "da14dWzjvdA3IdnmZyHMPmL", "TabsCtrl");
    "use strict";
    var DataMgr = require("DataMgr");
    var PageBase = require("PageBase");
    cc.Class({
      extends: cc.Component,
      properties: {
        tabs: {
          default: [],
          type: [ cc.Toggle ]
        },
        pages: {
          default: [],
          type: [ PageBase ]
        }
      },
      start: function start() {
        this.initToggleEvents();
        this.onTabClick(null, 0);
      },
      onTabClick: function onTabClick(toggle, data) {
        for (var i in this.pages) if (i == data) {
          if (!this.pages[i].node.active) {
            this.pages[i].onEnter();
            this.pages[i].node.active = true;
          }
        } else if (this.pages[i].node.active) {
          this.pages[i].node.active = false;
          this.pages[i].onExit();
        }
      },
      initToggleEvents: function initToggleEvents() {
        for (var i in this.tabs) {
          var checkEventHandler = new cc.Component.EventHandler();
          checkEventHandler.target = this.node;
          checkEventHandler.component = "TabsCtrl";
          checkEventHandler.handler = "onTabClick";
          checkEventHandler.customEventData = i;
          this.tabs[i].checkEvents.push(checkEventHandler);
        }
      }
    });
    cc._RF.pop();
  }, {
    DataMgr: "DataMgr",
    PageBase: "PageBase"
  } ]
}, {}, [ "DataMgr", "LayoutCtrl", "PageBasic", "ItemEdu", "PageEdu", "ItemExp", "PageExp", "PageBase", "ItemProj", "PageProj", "ItemSkill", "PageSkill", "TabsCtrl" ]);