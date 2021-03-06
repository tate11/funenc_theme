odoo.define('funenc.fnt_table', function (require) {
    "use strict";

    /**
     * list view like layui table
     */
    var BasicView = require('web.BasicView');
    var core = require('web.core');
    var fnt_table_render = require('funenc.fnt_table_render');
    var fnt_table_controller = require('funenc.fnt_table_controller');
    var ListView = require('web.ListView');

    var _lt = core._lt;
    
    var fnt_table = ListView.extend({
        config: _.extend({}, BasicView.prototype.config, {
            Renderer: fnt_table_render,
            Controller: fnt_table_controller
        }),
        viewType: 'list'
    });

    return fnt_table;

});
