var Bee = function() {

	// we want Grub to operate on the new instance of Bee
	Grub.call(this);

	this.age = 5;
	this.color = 'yellow';
	this.job = 'keep on growing';
};

// Bee instances will delegate to both Bee.prototype and Grub.prototype
// Failed lookups on Bee instances will fall through to Grub.prototype
Bee.prototype = Object.create(Grub.prototype)

// All object instances have a constructor property that point to the constructor function that created them.
Bee.prototype.constructor = Bee;