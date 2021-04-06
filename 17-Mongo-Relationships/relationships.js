//
// https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-1
//

// One to Few       // < couple hundred
// embed directly into the document
// Eg: 
const oneToFew = {
    name: "Name",
    savedAddresses: [
        {street: "Street", City: "city", country: "Country"},
        {street: "Street", City: "city", country: "Country"},
    ],
};


// One to Many      // < few thousand
// Store data separately
// Store references to document's ID somewhere inside the parent
// Eg: 
const oneToMany = {
    name: "Name",
    location: "Location",
    items: [
        ObjectID("ObjectID1"),
        ObjectID("ObjectID2"),
        ObjectID("ObjectID3"),
        // could be other property too
        // but ObjectID is commonly used
        // common to SQL Approach
    ],
};


// One to Bajillions    // > few thousand
// Store data separately   
// With thousands or more documents, 
// its more efficient to store a reference to the parent on the child document
// Eg:
const oneToBajillions = {
    tweetText: "Tweet",
    tags: ["Tag1", "Tag2", "tag3"],
    user: ObjectID("ObjectID"),
};


//
//  Denormalization     -       Two Way Referecing
//

// When frequently accessing both
    // 1. All tasks of a person
    // 2. All tasks of everyone
const person = {
    name: "Name",
    tasks: [
        ObjectID("ObjectID1"),
        ObjectID("ObjectID2"),
        ObjectID("ObjectID3"),
    ],
};

const tasks = {
    description: "Description",
    due_date: "Due Date",
    owner: ObjectID("ObjectID"),
};

// Many to One for frequent querying
// Suplicate data for efficiency

const product = {
    name: "Name",
    manufacturer: "Manufacturer",
    parts: [
        { ObjectID("ObjectID1"), name: "Name"},
        { ObjectID("ObjectID2"), name: "Name"},
        { ObjectID("ObjectID3"), name: "Name"},
    ],
};

