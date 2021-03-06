/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'assert';

describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

//    if(even(10) !== true) {
  //    throw new Error('10 should be even!');
  //  }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {

    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901273') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;


  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var should = chai.should();

  it('has a prefix of 51 and a length of 16', function() {
    (detectNetwork('5112345678901234')).should.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    (detectNetwork('5212345678901234')).should.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    (detectNetwork('5312345678901234')).should.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  var should = chai.should();

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();
  var prefixes = ['6011','644','645','646','657','658','659','65'];
  for(var prefix = 644; prefix <= 649; prefix++){
    (function(prefix){
      it('has a prefix of ' + prefix + ' and a length of 16',function(){
        var ccNum = prefix.toString() + '1234567891011';
        detectNetwork(ccNum).should.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function (){
        var ccLongNum = prefix.toString() + '1234567891011121';
        detectNetwork(ccLongNum).should.equal('Discover');
      });
    })(prefix)
  }
  it('has a prefix of 6011 and a length of 16',function(){
    var ccNum = '6011123456789101';
    detectNetwork(ccNum).should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function (){
    var ccLongNum = '6011123456789101112';
    detectNetwork(ccLongNum).should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16',function(){
    var ccNum = '6512345678910111';
    detectNetwork(ccNum).should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function (){
    var ccLongNum = '6512345678910111213';
    detectNetwork(ccLongNum).should.equal('Discover');
  });
});

describe('Maestro', function() {
  var should = chai.should();
  // Write full test coverage for the Maestro card
  //{name: "Maestro",         prefix: ['5018','5020','5038','6304'],cLength:[12,13,14,15,16,17,18,19]}
  var prefixes = ['5018','5020','5038','6304'];

  for(var i = 0; i < prefixes.length; i++){

    var prefix = prefixes[i];
    (function(prefix){
      it('has a prefix of ' + prefixes[i] + ' and a length of 12',function(){
        var ccNum = prefix.toString() + "12345678";
        detectNetwork(ccNum).should.equal('Maestro');
      });
      it('has a prefix of ' + prefixes[i] + ' and a length of 13',function(){
        var ccNum = prefix.toString() + "123456789";
        detectNetwork(ccNum).should.equal('Maestro');
      });
      it('has a prefix of ' + prefixes[i] + ' and a length of 14',function(){
        var ccNum = prefix.toString() + "1234567891";
        detectNetwork(ccNum).should.equal('Maestro');
      });
      it('has a prefix of ' + prefixes[i] + ' and a length of 15',function(){
        var ccNum = prefix.toString() + "12345678910";
        detectNetwork(ccNum).should.equal('Maestro');
      });
      it('has a prefix of ' + prefixes[i] + ' and a length of 16',function(){
        var ccNum = prefix.toString() + "123456789101";
        detectNetwork(ccNum).should.equal('Maestro');
      });
      it('has a prefix of ' + prefixes[i] + ' and a length of 17',function(){
        var ccNum = prefix.toString() + "1234567891011";
        detectNetwork(ccNum).should.equal('Maestro');
      });
      it('has a prefix of ' + prefixes[i] + ' and a length of 18',function(){
        var ccNum = prefix.toString() + "12345678910111";
        detectNetwork(ccNum).should.equal('Maestro');
      });
      it('has a prefix of ' + prefixes[i] + ' and a length of 19',function(){
        var ccNum = prefix.toString() + "123456789101112";
        detectNetwork(ccNum).should.equal('Maestro');
      });
    })(prefix)
  }
  // it('has a prefix of 5018 and a length of 12',function(){
  //   detectNetwork('501873647859').should.equal('Maestro');
  // });
  // it('has a prefix of 5020 and a length of 14', function (){
  //   detectNetwork('50200000332321').should.equal('Maestro');
  // });
  // it('has a prefix of 5038 and a length of 17',function(){
  //   detectNetwork('50382345888888882').should.equal('Maestro');
  // });
  // it('has a prefix of 6304 and a length of 19', function (){
  //   detectNetwork('6304100040003000033').should.equal('Maestro');
  // });
});

var chinaPrefixes = ['624','625','626','6282','6283','6288',
                                   '6284','6285','6286','6287'];
for(var i = 622126; i <= 622925; i++){
  chinaPrefixes.push(i.toString());
}
// cLength: [16,17,18,19]},

describe('China UnionPay', function() {
  var should = chai.should();
  for(var i = 0; i < chinaPrefixes.length; i++){
    var prefix = chinaPrefixes[i];

    (function(prefix){
      var endOfCardSixteen = (Math.ceil(Math.random()*Math.pow(10,22)).toString()).slice(0,16-prefix.length);
      var endOfCardSeventeen = (Math.ceil(Math.random()*Math.pow(10,22)).toString()).slice(0,17-prefix.length);
      var endOfCardEighteen = (Math.ceil(Math.random()*Math.pow(10,22)).toString()).slice(0,18-prefix.length);
      var endOfCardNineteen = (Math.ceil(Math.random()*Math.pow(10,22)).toString()).slice(0,19-prefix.length);

      it('has a prefix of ' + prefix + ' and a length of 16',function(){
        var ccNum = prefix.toString() + endOfCardSixteen.toString();
        detectNetwork(ccNum).should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17',function(){
        var ccNum = prefix.toString() + endOfCardSeventeen.toString();
        detectNetwork(ccNum).should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18',function(){
        var ccNum = prefix.toString() + endOfCardEighteen.toString();
        detectNetwork(ccNum).should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19',function(){
        var ccNum = prefix.toString() + endOfCardNineteen.toString();
        detectNetwork(ccNum).should.equal('China UnionPay');
      });
    })(prefix)
  }//  for(var i = 0; i < prefixes.length; i++)
});
//['4903','4905','4911','4936','564282',
//                                   '633110','6333','6759'],     cLength: [16,18,19]}
var switchPrefixes = ['4903','4905','4911','4936','564182','633110','6333','6759'];

describe('should support Switch', function() {
  var should = chai.should();
  for(var i = 0; i < switchPrefixes.length; i++){
    var prefix = switchPrefixes[i];

    (function(prefix){
      var endOfCardSixteen = (Math.ceil(Math.random()*Math.pow(10,22)).toString()).slice(0,16-prefix.length);
      var endOfCardEighteen = (Math.ceil(Math.random()*Math.pow(10,22)).toString()).slice(0,18-prefix.length);
      var endOfCardNineteen = (Math.ceil(Math.random()*Math.pow(10,22)).toString()).slice(0,19-prefix.length);

      it('has a prefix of ' + prefix + ' and a length of 16',function(){
        var ccNum = prefix.toString() + endOfCardSixteen.toString();
        detectNetwork(ccNum).should.equal('Switch');
      });
      it('has a prefix of ' + prefix + ' and a length of 18',function(){
        var ccNum = prefix.toString() + endOfCardEighteen.toString();
        detectNetwork(ccNum).should.equal('Switch');
      });
      it('has a prefix of ' + prefix + ' and a length of 19',function(){
        var ccNum = prefix.toString() + endOfCardNineteen.toString();
        detectNetwork(ccNum).should.equal('Switch');
      });
    })(prefix)
  }//  for(var i = 0; i < prefixes.length; i++)
});
//for (var prefix = 644; prefix <= 649; prefix++) {
//   (function(prefix) {
//     it('has a prefix of ' + prefix + ' and a length of 16');
//     it('has a prefix of ' + prefix + ' and a length of 19');
//   })(prefix)
// }
