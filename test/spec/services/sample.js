'use strict';

describe('Service: sample', function () {

  // load the service's module
  beforeEach(module('timelineApp'));

  // instantiate service
  var sample;
  beforeEach(inject(function (_sample_) {
    sample = _sample_;
  }));

  it('should do something', function () {
    expect(!!sample).toBe(true);
  });

});
