
import {defineType} from 'sanity'

export const tag = defineType({
    name: 'tag',
    title: 'Tag',
    type: 'document',
    fields: [
            {
                name: 'name',
                title: 'tag name',
                type: 'string',
            },
            {
                name: 'slug',
                title: 'slug',
                type: 'slug',
                options: {
                    source: 'name',
                }
            },
    ]
})