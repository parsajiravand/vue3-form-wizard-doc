---
date: 2020-01-01
category:
  - CategoryC
tag:
  - tag E
sticky: 10
image: vue-3.png
---

# Sticky Article with Higher Priority

Excerpt information which is added manually.

<!-- more -->

## Heading 2

Here is the content.

### Heading 3

Here is the content.

``` js
 <div style="display: flex; flex-direction: row">
        <!-- add sample image -->
        <div v-if="info.image">
          <img :src="'../../images/blog/' + info.image" alt="sample image" />
        </div>
        <div class="article-info">
          <span v-if="info.author" class="author"
            >Author: {{ info.author }}</span
          >
          <span v-if="info.date && !isTimeline" class="date"
            >Date: {{ new Date(info.date).toLocaleDateString() }}</span
          >
          <span v-if="info.category" class="category"
            >Category: {{ info.category.join(", ") }}</span
          >
          <span v-if="info.tag" class="tag"
            >Tag: {{ info.tag.join(", ") }}</span
          >
          <div v-if="info.excerpt" class="excerpt" v-html="info.excerpt" />
        </div>
      </div>
      
```