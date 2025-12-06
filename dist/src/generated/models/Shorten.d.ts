import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Shorten
 *
 */
export type ShortenModel = runtime.Types.Result.DefaultSelection<Prisma.$ShortenPayload>;
export type AggregateShorten = {
    _count: ShortenCountAggregateOutputType | null;
    _avg: ShortenAvgAggregateOutputType | null;
    _sum: ShortenSumAggregateOutputType | null;
    _min: ShortenMinAggregateOutputType | null;
    _max: ShortenMaxAggregateOutputType | null;
};
export type ShortenAvgAggregateOutputType = {
    id: number | null;
    accessCount: number | null;
};
export type ShortenSumAggregateOutputType = {
    id: number | null;
    accessCount: number | null;
};
export type ShortenMinAggregateOutputType = {
    id: number | null;
    url: string | null;
    shortCode: string | null;
    accessCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ShortenMaxAggregateOutputType = {
    id: number | null;
    url: string | null;
    shortCode: string | null;
    accessCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ShortenCountAggregateOutputType = {
    id: number;
    url: number;
    shortCode: number;
    accessCount: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ShortenAvgAggregateInputType = {
    id?: true;
    accessCount?: true;
};
export type ShortenSumAggregateInputType = {
    id?: true;
    accessCount?: true;
};
export type ShortenMinAggregateInputType = {
    id?: true;
    url?: true;
    shortCode?: true;
    accessCount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ShortenMaxAggregateInputType = {
    id?: true;
    url?: true;
    shortCode?: true;
    accessCount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ShortenCountAggregateInputType = {
    id?: true;
    url?: true;
    shortCode?: true;
    accessCount?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ShortenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Shorten to aggregate.
     */
    where?: Prisma.ShortenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Shortens to fetch.
     */
    orderBy?: Prisma.ShortenOrderByWithRelationInput | Prisma.ShortenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ShortenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Shortens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Shortens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Shortens
    **/
    _count?: true | ShortenCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ShortenAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ShortenSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ShortenMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ShortenMaxAggregateInputType;
};
export type GetShortenAggregateType<T extends ShortenAggregateArgs> = {
    [P in keyof T & keyof AggregateShorten]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShorten[P]> : Prisma.GetScalarType<T[P], AggregateShorten[P]>;
};
export type ShortenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShortenWhereInput;
    orderBy?: Prisma.ShortenOrderByWithAggregationInput | Prisma.ShortenOrderByWithAggregationInput[];
    by: Prisma.ShortenScalarFieldEnum[] | Prisma.ShortenScalarFieldEnum;
    having?: Prisma.ShortenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShortenCountAggregateInputType | true;
    _avg?: ShortenAvgAggregateInputType;
    _sum?: ShortenSumAggregateInputType;
    _min?: ShortenMinAggregateInputType;
    _max?: ShortenMaxAggregateInputType;
};
export type ShortenGroupByOutputType = {
    id: number;
    url: string;
    shortCode: string;
    accessCount: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ShortenCountAggregateOutputType | null;
    _avg: ShortenAvgAggregateOutputType | null;
    _sum: ShortenSumAggregateOutputType | null;
    _min: ShortenMinAggregateOutputType | null;
    _max: ShortenMaxAggregateOutputType | null;
};
type GetShortenGroupByPayload<T extends ShortenGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShortenGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShortenGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShortenGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShortenGroupByOutputType[P]>;
}>>;
export type ShortenWhereInput = {
    AND?: Prisma.ShortenWhereInput | Prisma.ShortenWhereInput[];
    OR?: Prisma.ShortenWhereInput[];
    NOT?: Prisma.ShortenWhereInput | Prisma.ShortenWhereInput[];
    id?: Prisma.IntFilter<"Shorten"> | number;
    url?: Prisma.StringFilter<"Shorten"> | string;
    shortCode?: Prisma.StringFilter<"Shorten"> | string;
    accessCount?: Prisma.IntFilter<"Shorten"> | number;
    createdAt?: Prisma.DateTimeFilter<"Shorten"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Shorten"> | Date | string;
};
export type ShortenOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    shortCode?: Prisma.SortOrder;
    accessCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShortenWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    shortCode?: string;
    AND?: Prisma.ShortenWhereInput | Prisma.ShortenWhereInput[];
    OR?: Prisma.ShortenWhereInput[];
    NOT?: Prisma.ShortenWhereInput | Prisma.ShortenWhereInput[];
    url?: Prisma.StringFilter<"Shorten"> | string;
    accessCount?: Prisma.IntFilter<"Shorten"> | number;
    createdAt?: Prisma.DateTimeFilter<"Shorten"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Shorten"> | Date | string;
}, "id" | "shortCode">;
export type ShortenOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    shortCode?: Prisma.SortOrder;
    accessCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ShortenCountOrderByAggregateInput;
    _avg?: Prisma.ShortenAvgOrderByAggregateInput;
    _max?: Prisma.ShortenMaxOrderByAggregateInput;
    _min?: Prisma.ShortenMinOrderByAggregateInput;
    _sum?: Prisma.ShortenSumOrderByAggregateInput;
};
export type ShortenScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShortenScalarWhereWithAggregatesInput | Prisma.ShortenScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShortenScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShortenScalarWhereWithAggregatesInput | Prisma.ShortenScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Shorten"> | number;
    url?: Prisma.StringWithAggregatesFilter<"Shorten"> | string;
    shortCode?: Prisma.StringWithAggregatesFilter<"Shorten"> | string;
    accessCount?: Prisma.IntWithAggregatesFilter<"Shorten"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Shorten"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Shorten"> | Date | string;
};
export type ShortenCreateInput = {
    url: string;
    shortCode: string;
    accessCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShortenUncheckedCreateInput = {
    id?: number;
    url: string;
    shortCode: string;
    accessCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShortenUpdateInput = {
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    shortCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accessCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShortenUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    shortCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accessCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShortenCreateManyInput = {
    id?: number;
    url: string;
    shortCode: string;
    accessCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShortenUpdateManyMutationInput = {
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    shortCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accessCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShortenUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    shortCode?: Prisma.StringFieldUpdateOperationsInput | string;
    accessCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShortenCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    shortCode?: Prisma.SortOrder;
    accessCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShortenAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    accessCount?: Prisma.SortOrder;
};
export type ShortenMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    shortCode?: Prisma.SortOrder;
    accessCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShortenMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    shortCode?: Prisma.SortOrder;
    accessCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShortenSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    accessCount?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ShortenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    url?: boolean;
    shortCode?: boolean;
    accessCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["shorten"]>;
export type ShortenSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    url?: boolean;
    shortCode?: boolean;
    accessCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["shorten"]>;
export type ShortenSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    url?: boolean;
    shortCode?: boolean;
    accessCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["shorten"]>;
export type ShortenSelectScalar = {
    id?: boolean;
    url?: boolean;
    shortCode?: boolean;
    accessCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ShortenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "url" | "shortCode" | "accessCount" | "createdAt" | "updatedAt", ExtArgs["result"]["shorten"]>;
export type $ShortenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Shorten";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        url: string;
        shortCode: string;
        accessCount: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["shorten"]>;
    composites: {};
};
export type ShortenGetPayload<S extends boolean | null | undefined | ShortenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShortenPayload, S>;
export type ShortenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShortenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShortenCountAggregateInputType | true;
};
export interface ShortenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Shorten'];
        meta: {
            name: 'Shorten';
        };
    };
    /**
     * Find zero or one Shorten that matches the filter.
     * @param {ShortenFindUniqueArgs} args - Arguments to find a Shorten
     * @example
     * // Get one Shorten
     * const shorten = await prisma.shorten.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShortenFindUniqueArgs>(args: Prisma.SelectSubset<T, ShortenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShortenClient<runtime.Types.Result.GetResult<Prisma.$ShortenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Shorten that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShortenFindUniqueOrThrowArgs} args - Arguments to find a Shorten
     * @example
     * // Get one Shorten
     * const shorten = await prisma.shorten.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShortenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShortenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShortenClient<runtime.Types.Result.GetResult<Prisma.$ShortenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Shorten that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortenFindFirstArgs} args - Arguments to find a Shorten
     * @example
     * // Get one Shorten
     * const shorten = await prisma.shorten.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShortenFindFirstArgs>(args?: Prisma.SelectSubset<T, ShortenFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShortenClient<runtime.Types.Result.GetResult<Prisma.$ShortenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Shorten that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortenFindFirstOrThrowArgs} args - Arguments to find a Shorten
     * @example
     * // Get one Shorten
     * const shorten = await prisma.shorten.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShortenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShortenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShortenClient<runtime.Types.Result.GetResult<Prisma.$ShortenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Shortens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shortens
     * const shortens = await prisma.shorten.findMany()
     *
     * // Get first 10 Shortens
     * const shortens = await prisma.shorten.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shortenWithIdOnly = await prisma.shorten.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ShortenFindManyArgs>(args?: Prisma.SelectSubset<T, ShortenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShortenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Shorten.
     * @param {ShortenCreateArgs} args - Arguments to create a Shorten.
     * @example
     * // Create one Shorten
     * const Shorten = await prisma.shorten.create({
     *   data: {
     *     // ... data to create a Shorten
     *   }
     * })
     *
     */
    create<T extends ShortenCreateArgs>(args: Prisma.SelectSubset<T, ShortenCreateArgs<ExtArgs>>): Prisma.Prisma__ShortenClient<runtime.Types.Result.GetResult<Prisma.$ShortenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Shortens.
     * @param {ShortenCreateManyArgs} args - Arguments to create many Shortens.
     * @example
     * // Create many Shortens
     * const shorten = await prisma.shorten.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ShortenCreateManyArgs>(args?: Prisma.SelectSubset<T, ShortenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Shortens and returns the data saved in the database.
     * @param {ShortenCreateManyAndReturnArgs} args - Arguments to create many Shortens.
     * @example
     * // Create many Shortens
     * const shorten = await prisma.shorten.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Shortens and only return the `id`
     * const shortenWithIdOnly = await prisma.shorten.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ShortenCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShortenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShortenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Shorten.
     * @param {ShortenDeleteArgs} args - Arguments to delete one Shorten.
     * @example
     * // Delete one Shorten
     * const Shorten = await prisma.shorten.delete({
     *   where: {
     *     // ... filter to delete one Shorten
     *   }
     * })
     *
     */
    delete<T extends ShortenDeleteArgs>(args: Prisma.SelectSubset<T, ShortenDeleteArgs<ExtArgs>>): Prisma.Prisma__ShortenClient<runtime.Types.Result.GetResult<Prisma.$ShortenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Shorten.
     * @param {ShortenUpdateArgs} args - Arguments to update one Shorten.
     * @example
     * // Update one Shorten
     * const shorten = await prisma.shorten.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ShortenUpdateArgs>(args: Prisma.SelectSubset<T, ShortenUpdateArgs<ExtArgs>>): Prisma.Prisma__ShortenClient<runtime.Types.Result.GetResult<Prisma.$ShortenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Shortens.
     * @param {ShortenDeleteManyArgs} args - Arguments to filter Shortens to delete.
     * @example
     * // Delete a few Shortens
     * const { count } = await prisma.shorten.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ShortenDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShortenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Shortens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shortens
     * const shorten = await prisma.shorten.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ShortenUpdateManyArgs>(args: Prisma.SelectSubset<T, ShortenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Shortens and returns the data updated in the database.
     * @param {ShortenUpdateManyAndReturnArgs} args - Arguments to update many Shortens.
     * @example
     * // Update many Shortens
     * const shorten = await prisma.shorten.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Shortens and only return the `id`
     * const shortenWithIdOnly = await prisma.shorten.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ShortenUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShortenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShortenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Shorten.
     * @param {ShortenUpsertArgs} args - Arguments to update or create a Shorten.
     * @example
     * // Update or create a Shorten
     * const shorten = await prisma.shorten.upsert({
     *   create: {
     *     // ... data to create a Shorten
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shorten we want to update
     *   }
     * })
     */
    upsert<T extends ShortenUpsertArgs>(args: Prisma.SelectSubset<T, ShortenUpsertArgs<ExtArgs>>): Prisma.Prisma__ShortenClient<runtime.Types.Result.GetResult<Prisma.$ShortenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Shortens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortenCountArgs} args - Arguments to filter Shortens to count.
     * @example
     * // Count the number of Shortens
     * const count = await prisma.shorten.count({
     *   where: {
     *     // ... the filter for the Shortens we want to count
     *   }
     * })
    **/
    count<T extends ShortenCountArgs>(args?: Prisma.Subset<T, ShortenCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShortenCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Shorten.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShortenAggregateArgs>(args: Prisma.Subset<T, ShortenAggregateArgs>): Prisma.PrismaPromise<GetShortenAggregateType<T>>;
    /**
     * Group by Shorten.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends ShortenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShortenGroupByArgs['orderBy'];
    } : {
        orderBy?: ShortenGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShortenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShortenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Shorten model
     */
    readonly fields: ShortenFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Shorten.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ShortenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Shorten model
 */
export interface ShortenFieldRefs {
    readonly id: Prisma.FieldRef<"Shorten", 'Int'>;
    readonly url: Prisma.FieldRef<"Shorten", 'String'>;
    readonly shortCode: Prisma.FieldRef<"Shorten", 'String'>;
    readonly accessCount: Prisma.FieldRef<"Shorten", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Shorten", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Shorten", 'DateTime'>;
}
/**
 * Shorten findUnique
 */
export type ShortenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shorten
     */
    select?: Prisma.ShortenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Shorten
     */
    omit?: Prisma.ShortenOmit<ExtArgs> | null;
    /**
     * Filter, which Shorten to fetch.
     */
    where: Prisma.ShortenWhereUniqueInput;
};
/**
 * Shorten findUniqueOrThrow
 */
export type ShortenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shorten
     */
    select?: Prisma.ShortenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Shorten
     */
    omit?: Prisma.ShortenOmit<ExtArgs> | null;
    /**
     * Filter, which Shorten to fetch.
     */
    where: Prisma.ShortenWhereUniqueInput;
};
/**
 * Shorten findFirst
 */
export type ShortenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shorten
     */
    select?: Prisma.ShortenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Shorten
     */
    omit?: Prisma.ShortenOmit<ExtArgs> | null;
    /**
     * Filter, which Shorten to fetch.
     */
    where?: Prisma.ShortenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Shortens to fetch.
     */
    orderBy?: Prisma.ShortenOrderByWithRelationInput | Prisma.ShortenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Shortens.
     */
    cursor?: Prisma.ShortenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Shortens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Shortens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Shortens.
     */
    distinct?: Prisma.ShortenScalarFieldEnum | Prisma.ShortenScalarFieldEnum[];
};
/**
 * Shorten findFirstOrThrow
 */
export type ShortenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shorten
     */
    select?: Prisma.ShortenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Shorten
     */
    omit?: Prisma.ShortenOmit<ExtArgs> | null;
    /**
     * Filter, which Shorten to fetch.
     */
    where?: Prisma.ShortenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Shortens to fetch.
     */
    orderBy?: Prisma.ShortenOrderByWithRelationInput | Prisma.ShortenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Shortens.
     */
    cursor?: Prisma.ShortenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Shortens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Shortens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Shortens.
     */
    distinct?: Prisma.ShortenScalarFieldEnum | Prisma.ShortenScalarFieldEnum[];
};
/**
 * Shorten findMany
 */
export type ShortenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shorten
     */
    select?: Prisma.ShortenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Shorten
     */
    omit?: Prisma.ShortenOmit<ExtArgs> | null;
    /**
     * Filter, which Shortens to fetch.
     */
    where?: Prisma.ShortenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Shortens to fetch.
     */
    orderBy?: Prisma.ShortenOrderByWithRelationInput | Prisma.ShortenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Shortens.
     */
    cursor?: Prisma.ShortenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Shortens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Shortens.
     */
    skip?: number;
    distinct?: Prisma.ShortenScalarFieldEnum | Prisma.ShortenScalarFieldEnum[];
};
/**
 * Shorten create
 */
export type ShortenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shorten
     */
    select?: Prisma.ShortenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Shorten
     */
    omit?: Prisma.ShortenOmit<ExtArgs> | null;
    /**
     * The data needed to create a Shorten.
     */
    data: Prisma.XOR<Prisma.ShortenCreateInput, Prisma.ShortenUncheckedCreateInput>;
};
/**
 * Shorten createMany
 */
export type ShortenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shortens.
     */
    data: Prisma.ShortenCreateManyInput | Prisma.ShortenCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Shorten createManyAndReturn
 */
export type ShortenCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shorten
     */
    select?: Prisma.ShortenSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Shorten
     */
    omit?: Prisma.ShortenOmit<ExtArgs> | null;
    /**
     * The data used to create many Shortens.
     */
    data: Prisma.ShortenCreateManyInput | Prisma.ShortenCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Shorten update
 */
export type ShortenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shorten
     */
    select?: Prisma.ShortenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Shorten
     */
    omit?: Prisma.ShortenOmit<ExtArgs> | null;
    /**
     * The data needed to update a Shorten.
     */
    data: Prisma.XOR<Prisma.ShortenUpdateInput, Prisma.ShortenUncheckedUpdateInput>;
    /**
     * Choose, which Shorten to update.
     */
    where: Prisma.ShortenWhereUniqueInput;
};
/**
 * Shorten updateMany
 */
export type ShortenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Shortens.
     */
    data: Prisma.XOR<Prisma.ShortenUpdateManyMutationInput, Prisma.ShortenUncheckedUpdateManyInput>;
    /**
     * Filter which Shortens to update
     */
    where?: Prisma.ShortenWhereInput;
    /**
     * Limit how many Shortens to update.
     */
    limit?: number;
};
/**
 * Shorten updateManyAndReturn
 */
export type ShortenUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shorten
     */
    select?: Prisma.ShortenSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Shorten
     */
    omit?: Prisma.ShortenOmit<ExtArgs> | null;
    /**
     * The data used to update Shortens.
     */
    data: Prisma.XOR<Prisma.ShortenUpdateManyMutationInput, Prisma.ShortenUncheckedUpdateManyInput>;
    /**
     * Filter which Shortens to update
     */
    where?: Prisma.ShortenWhereInput;
    /**
     * Limit how many Shortens to update.
     */
    limit?: number;
};
/**
 * Shorten upsert
 */
export type ShortenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shorten
     */
    select?: Prisma.ShortenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Shorten
     */
    omit?: Prisma.ShortenOmit<ExtArgs> | null;
    /**
     * The filter to search for the Shorten to update in case it exists.
     */
    where: Prisma.ShortenWhereUniqueInput;
    /**
     * In case the Shorten found by the `where` argument doesn't exist, create a new Shorten with this data.
     */
    create: Prisma.XOR<Prisma.ShortenCreateInput, Prisma.ShortenUncheckedCreateInput>;
    /**
     * In case the Shorten was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ShortenUpdateInput, Prisma.ShortenUncheckedUpdateInput>;
};
/**
 * Shorten delete
 */
export type ShortenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shorten
     */
    select?: Prisma.ShortenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Shorten
     */
    omit?: Prisma.ShortenOmit<ExtArgs> | null;
    /**
     * Filter which Shorten to delete.
     */
    where: Prisma.ShortenWhereUniqueInput;
};
/**
 * Shorten deleteMany
 */
export type ShortenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Shortens to delete
     */
    where?: Prisma.ShortenWhereInput;
    /**
     * Limit how many Shortens to delete.
     */
    limit?: number;
};
/**
 * Shorten without action
 */
export type ShortenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shorten
     */
    select?: Prisma.ShortenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Shorten
     */
    omit?: Prisma.ShortenOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Shorten.d.ts.map