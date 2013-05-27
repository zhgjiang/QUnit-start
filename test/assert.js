/**
 * [ deepEqual]
 * @return {[type]} [description]
 */
test( "object == object", function() {
  var obj = { foo: "bar" };
 
  deepEqual( obj, { foo: "bar" }, "Two objects can be the same in value" );
});

/**
 * [ notDeepEqual]
 * @return {[type]} [description]
 */
test( "object != object", function() {
  var obj = { foo: "bar" };
 
  notDeepEqual( obj, { foo: "bla" }, "Different object, same key, different value, not equal" );
});

/**
 * [ equal]
 * @return {[type]} [description]
 */
test( "==", function() {
  equal( 0, 0, "Zero; equal succeeds" );
  equal( "", 0, "Empty, Zero; equal succeeds" );
  equal( "", "", "Empty, Empty; equal succeeds" );
  equal( 0, 0, "Zero, Zero; equal succeeds" );
 
  equal( "three", 3, "Three, 3; equal fails" );
  equal( null, false, "null, false; equal fails" );
});

/**
 * [ notEqual]
 * @return {[type]} [description]
 */
test( "!=", function() {
  notEqual( 1, "2", "String '2' and number 1 don't have the same value" );
  notEqual( "three", 3, "Three, 3; equal fails" );
});

/**
 * [ notStrictEqual]
 * @return {[type]} [description]
 */
test( "!==", function() {
  notStrictEqual( 1, "1", "String '1' and number 1 don't have the same value" );
});

/**
 * [ strictEqual]
 * @return {[type]} [description]
 */
test( "===", function() {
  strictEqual( 1, 1, "1 and 1 are the same value and type" );
  strictEqual( 1, "1", "1 and '1' are the same value but not the same type" );
});

/**
 * [ ok]
 * @return {[type]} [description]
 */
test( "!!object", function() {
  ok( true, "true succeeds" );
  ok( "non-empty", "non-empty string succeeds" );
 
  ok( false, "false fails" );
  ok( 0, "0 fails" );
  ok( NaN, "NaN fails" );
  ok( "", "empty string fails" );
  ok( null, "null fails" );
  ok( undefined, "undefined fails" );
});

/**
 * [ throws]
 * @return {[type]} [description]
 */
test( "throws", function() {
 
  function CustomError( message ) {
    this.message = message;
  }
 
  CustomError.prototype.toString = function() {
    return this.message;
  };
 
  throws(
    function() {
      throw "error"
    },
    "throws with just a message, no expected"
  );
 
  throws(
    function() {
      throw new CustomError();
    },
    CustomError,
    "raised error is an instance of CustomError"
  );
 
  throws(
    function() {
      throw new CustomError("some error description");
    },
    /description/,
    "raised error message contains 'description'"
  );
});

