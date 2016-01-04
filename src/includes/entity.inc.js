/**
 * A proxy to create an instance of a jDrupal Node object.
 * @param nid_or_node
 * @returns {jDrupal.Node}
 * @constructor
 */
dg.Node = function(nid_or_node) { return new jDrupal.Node(nid_or_node); };

dg.entityRenderContent = function(entity) {
  var content = {};
  var label = entity.getEntityKey('label');
  content[label] = { _markup: '<h2>' + entity.label() + '</h2>' };
  return content;
};