chai.should();

describe("Random color sequence", function () {
    it("should track its length", function() {
        var sequence = new RandomSequence(4);

        sequence.items.length.should.equal(4);
    });
})