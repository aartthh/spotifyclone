import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', '837d01fb5cmshc38a4fbc49bb5a8p10e92djsn5be9f1a019d6');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: () => '/charts/world?country_code=DZ'
        }),
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;
