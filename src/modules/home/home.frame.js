/**
 * Created with JetBrains PhpStorm.
 * User: brianb
 * Date: 7/29/12
 * Time: 4:21 PM
 * To change this template use File | Settings | File Templates.
 */

goog.provide('vacationer.home.Frame');

goog.require('home.Frame.Templates');
goog.require('soy');
goog.require('goog.Disposable');

/**
 * @constructor
 * @extends {goog.Disposable}
 */
vacationer.home.Frame = function() {
    goog.base(this);
};
goog.inherits(vacationer.home.Frame, goog.Disposable);

/**
 * @return {string}
 */
vacationer.home.Frame.prototype.render = function() {
    return home.Frame.Templates.homeFrame();
}

/** @override */
vacationer.home.Frame.prototype.disposeInternal = function() {

};