var Utils = require("../../utils")

module.exports = (function() {
  var QueryGenerator = {
    addSchema: function(opts) {
      throwMethodUndefined('addSchema')
    },

    /*
      Returns a query for creating a table.
      Parameters:
        - tableName: Name of the new table.
        - attributes: An object with containing attribute-attributeType-pairs.
                      Attributes should have the format:
                      {attributeName: type, attr2: type2}
                      --> e.g. {title: 'VARCHAR(255)'}
        - options: An object with options.
                   Defaults: { engine: 'InnoDB', charset: null }
    */
    createTableQuery: function(tableName, attributes, options) {
      throwMethodUndefined('createTableQuery')
    },

    /*
      Returns a query for dropping a table.
    */
    dropTableQuery: function(tableName, options) {
      throwMethodUndefined('dropTableQuery')
    },

    /*
      Returns a rename table query.
      Parameters:
        - originalTableName: Name of the table before execution.
        - futureTableName: Name of the table after execution.
    */
    renameTableQuery: function(originalTableName, futureTableName) {
      throwMethodUndefined('renameTableQuery')
    },

    /*
      Returns a query, which gets all available table names in the database.
    */
    showTablesQuery: function() {
      throwMethodUndefined('showTablesQuery')
    },

    /*
      Returns a query, which adds an attribute to an existing table.
      Parameters:
        - tableName: Name of the existing table.
        - attributes: A hash with attribute-attributeOptions-pairs.
          - key: attributeName
          - value: A hash with attribute specific options:
            - type: DataType
            - defaultValue: A String with the default value
            - allowNull: Boolean
    */
    addColumnQuery: function(tableName, attributes) {
      throwMethodUndefined('addColumnQuery')
    },

    /*
      Returns a query, which removes an attribute from an existing table.
      Parameters:
        - tableName: Name of the existing table
        - attributeName: Name of the obsolete attribute.
    */
    removeColumnQuery: function(tableName, attributeName) {
      throwMethodUndefined('removeColumnQuery')
    },

    /*
      Returns a query, which modifies an existing attribute from a table.
      Parameters:
        - tableName: Name of the existing table.
        - attributes: A hash with attribute-attributeOptions-pairs.
          - key: attributeName
          - value: A hash with attribute specific options:
            - type: DataType
            - defaultValue: A String with the default value
            - allowNull: Boolean
    */
    changeColumnQuery: function(tableName, attributes) {
      throwMethodUndefined('changeColumnQuery')
    },

    /*
      Returns a query, which renames an existing attribute.
      Parameters:
        - tableName: Name of an existing table.
        - attrNameBefore: The name of the attribute, which shall be renamed.
        - attrNameAfter: The name of the attribute, after renaming.
    */
    renameColumnQuery: function(tableName, attrNameBefore, attrNameAfter) {
      throwMethodUndefined('renameColumnQuery')
    },

    /*
      Returns a query for selecting elements in the table <tableName>.
      Options:
        - attributes -> An array of attributes (e.g. ['name', 'birthday']). Default: *
        - where -> A hash with conditions (e.g. {name: 'foo'})
                   OR an ID as integer
                   OR a string with conditions (e.g. 'name="foo"').
                   If you use a string, you have to escape it on your own.
        - order -> e.g. 'id DESC'
        - group
        - limit -> The maximum count you want to get.
        - offset -> An offset value to start from. Only useable with limit!
    */
    selectQuery: function(tableName, options) {
      throwMethodUndefined('selectQuery')
    },

    /*
      Returns an insert into command. Parameters: table name + hash of attribute-value-pairs.
    */
    insertQuery: function(tableName, attrValueHash) {
      throwMethodUndefined('insertQuery')
    },

    /*
      Returns an insert into command for multiple values.
      Parameters: table name + list of hashes of attribute-value-pairs.
    */
    bulkInsertQuery: function(tableName, attrValueHashes) {
      throwMethodUndefined('bulkInsertQuery')
    },

    /*
      Returns an update query.
      Parameters:
        - tableName -> Name of the table
        - values -> A hash with attribute-value-pairs
        - where -> A hash with conditions (e.g. {name: 'foo'})
                   OR an ID as integer
                   OR a string with conditions (e.g. 'name="foo"').
                   If you use a string, you have to escape it on your own.
    */
    updateQuery: function(tableName, values, where) {
      throwMethodUndefined('updateQuery')
    },

    /*
      Returns a deletion query.
      Parameters:
        - tableName -> Name of the table
        - where -> A hash with conditions (e.g. {name: 'foo'})
                   OR an ID as integer
                   OR a string with conditions (e.g. 'name="foo"').
                   If you use a string, you have to escape it on your own.
      Options:
        - limit -> Maximaum count of lines to delete
        - truncate -> boolean - whether to use an 'optimized' mechanism (i.e. TRUNCATE) if available,
                                note that this should not be the default behaviour because TRUNCATE does not
                                always play nicely (e.g. InnoDB tables with FK constraints)
                                (@see http://dev.mysql.com/doc/refman/5.6/en/truncate-table.html).
                                Note that truncate must ignore limit and where
    */
    deleteQuery: function(tableName, where, options) {
      throwMethodUndefined('deleteQuery')
    },

    /*
      Returns a bulk deletion query.
      Parameters:
        - tableName -> Name of the table
        - where -> A hash with conditions (e.g. {name: 'foo'})
                   OR an ID as integer
                   OR a string with conditions (e.g. 'name="foo"').
                   If you use a string, you have to escape it on your own.
    */
    bulkDeleteQuery: function(tableName, where, options) {
      throwMethodUndefined('bulkDeleteQuery')
    },

    /*
      Returns an update query.
      Parameters:
        - tableName -> Name of the table
        - values -> A hash with attribute-value-pairs
        - where -> A hash with conditions (e.g. {name: 'foo'})
                   OR an ID as integer
                   OR a string with conditions (e.g. 'name="foo"').
                   If you use a string, you have to escape it on your own.
    */
    incrementQuery: function(tableName, values, where) {
      throwMethodUndefined('incrementQuery')
    },

    /*
      Returns an add index query.
      Parameters:
        - tableName -> Name of an existing table.
        - attributes:
            An array of attributes as string or as hash.
            If the attribute is a hash, it must have the following content:
              - attribute: The name of the attribute/column
              - length: An integer. Optional
              - order: 'ASC' or 'DESC'. Optional
        - options:
          - indicesType: UNIQUE|FULLTEXT|SPATIAL
          - indexName: The name of the index. Default is <tableName>_<attrName1>_<attrName2>
          - parser
    */
    addIndexQuery: function(tableName, attributes, options) {
      throwMethodUndefined('addIndexQuery')
    },

    /*
      Returns an show index query.
      Parameters:
        - tableName: Name of an existing table.
        - options:
          - database: Name of the database.
    */
    showIndexQuery: function(tableName, options) {
      throwMethodUndefined('showIndexQuery')
    },

    /*
      Returns a remove index query.
      Parameters:
        - tableName: Name of an existing table.
        - indexNameOrAttributes: The name of the index as string or an array of attribute names.
    */
    removeIndexQuery: function(tableName, indexNameOrAttributes) {
      throwMethodUndefined('removeIndexQuery')
    },

    /*
      Takes something and transforms it into values of a where condition.
    */
    getWhereConditions: function(smth) {
      throwMethodUndefined('getWhereConditions')
    },

    /*
      Takes a hash and transforms it into a mysql where condition: {key: value, key2: value2} ==> key=value AND key2=value2
      The values are transformed by the relevant datatype.
    */
    hashToWhereConditions: function(hash) {
      throwMethodUndefined('hashToWhereConditions')
    },

    /*
      This method transforms an array of attribute hashes into equivalent
      sql attribute definition.
    */
    attributesToSQL: function(attributes) {
      throwMethodUndefined('attributesToSQL')
    },

    /*
      Returns all auto increment fields of a factory.
    */
    findAutoIncrementField: function(factory) {
      throwMethodUndefined('findAutoIncrementField')
    },

    /*
      Globally enable foreign key constraints
    */
    enableForeignKeyConstraintsQuery: function() {
      throwMethodUndefined('enableForeignKeyConstraintsQuery')
    },

    /*
      Globally disable foreign key constraints
    */
    disableForeignKeyConstraintsQuery: function() {
      throwMethodUndefined('disableForeignKeyConstraintsQuery')
    },

    /*
      Quote an object based on its type. This is a more general version of quoteIdentifiers
      Strings: should proxy to quoteIdentifiers
      Arrays: First argument should be qouted, second argument should be append without quoting
      Objects:
        * If raw is set, that value should be returned verbatim, without quoting
        * If fn is set, the string should start with the value of fn, starting paren, followed by
          the values of cols (which is assumed to be an array), quoted and joined with ', ', 
          unless they are themselves objects
        * If direction is set, should be prepended

      Currently this function is only used for ordering / grouping columns, but it could
      potentially also be used for other places where we want to be able to call SQL functions (e.g. as default values)
    */
    quote: function(obj, force) {
      if (Utils._.isString(obj)) {
        return this.quoteIdentifiers(obj, force)
      } else if (Array.isArray(obj)) {
        return this.quote(obj[0], force) + ' ' + obj[1]
      } else if (obj instanceof Utils.fn || obj instanceof Utils.col) {
        return obj.toString(this)
      } else if (Utils._.isObject(obj) && 'raw' in obj) {
        return obj.raw
      } else {
        throw new Error('Unknown structure passed to order / group: ' + JSON.stringify(obj))
      }
    },

    /*
      Escape an identifier (e.g. a table or attribute name)
    */
    quoteIdentifier: function(identifier, force) {
      throwMethodUndefined('quoteIdentifier')
    },

    /*
      Split an identifier into .-separated tokens and quote each part
    */
    quoteIdentifiers: function(identifiers, force) {
      throwMethodUndefined('quoteIdentifiers')
    },

    /*
      Escape a value (e.g. a string, number or date)
    */
    escape: function(value) {
      throwMethodUndefined('escape')
    }

  }

  var throwMethodUndefined = function(methodName) {
    throw new Error('The method "' + methodName + '" is not defined! Please add it to your sql dialect.')
  }

  return QueryGenerator
})()

