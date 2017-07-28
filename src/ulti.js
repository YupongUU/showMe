export default function _() {
  this.$ = function(id) {
    return document.querySelector(id);
  };
}
