/**
 *  QUnit模块化测试
 */
module( "模块测试A" );
test( "a basic test example", function() {
  ok( true, "this test is fine" );
});
test( "a basic test example 2", function() {
  ok( true, "this test is fine" );
});
 
module( "模块测试B" );
test( "a basic test example 3", function() {
  ok( true, "this test is fine" );
});
test( "a basic test example 4", function() {
  ok( true, "this test is fine" );
});

/**
 * 
 */
module( "模块lifecycle测试", {
  setup: function() {
    // prepare something for all following tests
    alert("setup");
  },
  teardown: function() {
    // clean up after each test
    alert("teardown");
  }
});

/**
 * [ 定义assertions数量]
 * [Specify how many assertions are expected to run within a test.]
 */
test( "expect", function() {
  expect( 2 );
 
  function calc( x, operation ) {
    return operation( x );
  }
 
  var result = calc( 2, function( x ) {
    ok( true, "calc() calls operation function" );
    return x * x;
  });
 
  equal( result, 4, "2 square equals 4" );
});
