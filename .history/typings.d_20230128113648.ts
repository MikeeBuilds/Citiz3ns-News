


type Pagination = {
    count: Int;
    limit: 
}



type NewsResponse = { 
    pagination: Pagination;
    data: DataEntry[];
};

type Category =
    "general"
    "business"
    "entertainment"
    "health"
    "science"
    "sports"
    "technology";