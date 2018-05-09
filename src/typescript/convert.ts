/**
 * Turf FEATURE CONVERSION functions.
 * http://turfjs.org/docs/
 */

/**
 *
 */

 import * as turf from "@turf/turf";

/**
 * Combines a FeatureCollection of Point, LineString, or Polygon features
 * into MultiPoint, MultiLineString, or MultiPolygon features.
 *
 * @param {FeatureCollection<Point|LineString|Polygon>} fcoll a FeatureCollection of any type
 * @returns {FeatureCollection<MultiPoint|MultiLineString|MultiPolygon>} a FeatureCollection of corresponding type to input
 * @example
 * var fc = turf.featureCollection([
 *   turf.point([19.026432, 47.49134]),
 *   turf.point([19.074497, 47.509548])
 * ]);
 *
 * var combined = turf.combine(fc);
 */
export function combine(fcoll) {
    return turf.combine(fcoll);
}

/**
 * Takes a feature or set of features and returns all positions as Point|points.
 * Throws an error if it encounters an unknown geometry type
 *
 * @param {GeoJSON} geojson input features
 * @returns {FeatureCollection<point>} points representing the exploded input features
 * @example
 * var polygon = turf.polygon([[[-81, 41], [-88, 36], [-84, 31], [-80, 33], [-77, 39], [-81, 41]]]);
 *
 * var explode = turf.explode(polygon);
 */
export function explode(geojson) {
    return turf.explode(geojson);
}


/**
 * Flattens any GeoJSON to a FeatureCollection inspired by [geojson-flatten](https://github.com/tmcw/geojson-flatten).
 *
 * @param {GeoJSON} geojson any valid GeoJSON Object
 * @returns {FeatureCollection<any>} all Multi-Geometries are flattened into single Features
 * @example
 * var multiGeometry = turf.multiPolygon([
 *   [[[102.0, 2.0], [103.0, 2.0], [103.0, 3.0], [102.0, 3.0], [102.0, 2.0]]],
 *   [[[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]],
 *   [[100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]]]
 * ]);
 *
 * var flatten = turf.flatten(multiGeometry);
 */
export function flatten(geojson) {
    return turf.flatten(geojson);
}

/**
 * Converts (Multi)LineString(s) to Polygon(s).
 *
 * @param {FeatureCollection|Feature<LineString|MultiLineString>} lines Features to convert
 * @param {Object} [options={}] Optional parameters
 * @param {Object} [options.properties={}] translates GeoJSON properties to Feature
 * @param {boolean} [options.autoComplete=true] auto complete linestrings (matches first & last coordinates)
 * @param {boolean} [options.orderCoords=true] sorts linestrings to place outer ring at the first position of the coordinates
 * @returns {Feature<Polygon|MultiPolygon>} converted to Polygons
 * @example
 * var line = turf.lineString([[125, -30], [145, -30], [145, -20], [125, -20], [125, -30]]);
 *
 * var polygon = turf.lineToPolygon(line);
 */
export function lineToPolygon(lines, parameters) {
    return turf.lineToPolygon(lines, parameters);
}

/**
 * Polygonizes LineString|(Multi)LineString(s)} into Polygons.
 *
 * Implementation of GEOSPolygonize function (`geos::operation::polygonize::Polygonizer`).
 *
 * Polygonizes a set of lines that represents edges in a planar graph. Edges must be correctly
 * noded, i.e., they must only meet at their endpoints.
 *
 * The implementation correctly handles:
 *
 * - Dangles: edges which have one or both ends which are not incident on another edge endpoint.
 * - Cut Edges (bridges): edges that are connected at both ends but which do not form part of a polygon.
 *
 * Throws an error is geoJson is invalid.
 *
 * @param {FeatureCollection|Geometry|Feature<LineString|MultiLineString>} geoJson Lines in order to polygonize
 * @returns {FeatureCollection<Polygon>} Polygons created
 */
export function polygonize(geojson) {
    return turf.polygonize(geojson);
}

/**
 * Converts a Polygon to LineString|(Multi)LineString or MultiPolygon to a FeatureCollection of LineString|(Multi)LineString.
 *
 * @param {Feature<Polygon|MultiPolygon>} polygon Feature to convert
 * @param {Object} [options={}] Optional parameters
 * @param {Object} [options.properties={}] translates GeoJSON properties to Feature
 * @returns {FeatureCollection|Feature<LineString|MultiLinestring>} converted (Multi)Polygon to (Multi)LineString
 * @example
 * var poly = turf.polygon([[[125, -30], [145, -30], [145, -20], [125, -20], [125, -30]]]);
 *
 * var line = turf.polygonToLine(poly);
 */
export function polygonToLine(polygon, parameters) {
    return turf.polygonToLine(polygon, parameters);
}
