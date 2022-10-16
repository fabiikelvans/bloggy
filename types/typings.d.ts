interface Category {
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    _type: "category";
    slug: {
        _type: "slug";
        current: string;
    };
    title: string;
}

interface Image {
    _key: string;
    _type: "image";
    asset: {
        url: string;
    };
}

interface Post{
    _id: string;
    _createdAt: string;
    title: string;
    author:{
        name: string;
        image: string;
    };
    description: string;
    mainImage: Image[];
    slug: {
        current: string;
    };
    body: [object];
    category: Category
}
