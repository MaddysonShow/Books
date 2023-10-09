import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const booksApi = createApi({
    reducerPath: 'bookAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://www.googleapis.com/books/v1/`
    }),
    endpoints: (build) => ({
        getBook: build.query({
            query: (args) => ({
                // put '' if category == 'all' in bookBlock zaprose
                url: `volumes?q=${args.search}+subject:${args.category}`,
                params: {
                    maxResults: args.maxResults,
                    startIndex: args.startIndex,
                    orderBy: args.sort,
                    key: args.key
                }
            }),
        }),
        getOneBook: build.query({
            query: (args) => ({
                //GET https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=yourAPIKey
                url: `volumes/${args.id}`,
                params: {
                    key: args.key
                }
            }),
        }),
    }),
})