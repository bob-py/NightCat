<template>
  <div class="admin-tag-view">
    <!--侧边按钮组-->
    <aside class="aside">
      <div class="radius-btn blue" @click="openModal('add')">
        <Icon name="plus" :size="24"></Icon>
      </div>
      <div class="radius-btn yellow" @click="openModal('edit')">
        <Icon name="post" :size="24"></Icon>
      </div>
      <div class="radius-btn red" @click="minusClick">
        <Icon name="delete" :size="24"></Icon>
      </div>
    </aside>

    <div class="admin-main">
      <div v-if="!list.length">暂无标签</div>
      <template v-else>
       <div class="tag-wrap">
          <h1>所有标签</h1>
          <div class="tag-group">
            <div v-for="(tag, i) in list" :class="['tag-badge', { active: active === i }]" @click="clickTag(i)">
              {{ tag.name }}
              {{ tag.count }}
            </div>
          </div>
        </div>
        <div class="article-wrap">
          <h1>该标签下的文章</h1>
          <div class="tag-group">
            <a v-for="(article, i) in articles" :class="['article-link', { release: article.release }]" :key="i" :href="`/article/${article._id}`" target="_blank">
              # {{ article.title }} ({{ article.release ? '已发布' : '未发布'}})
            </a>
          </div>
        </div>
      </template>
    </div>

    <!--添加模态框-->
    <Modal v-model="addModalShow" class-name="tag-modal">
      <Input label="标签名字" v-model="name"></Input>
      <Btn v-if="type === 'add'" @click="addTag">OK</Btn>
      <Btn v-if="type === 'edit'" @click="editTag">OK</Btn>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: 'admin-tag',
    data () {
      return {
        type: 'add',
        addModalShow: false,
        active: null,
        list: [],
        name: ''
      }
    },
    computed: {
      activeTag () {
        return this.list.length && this.active !== null ? this.list[this.active].name : ''
      },
      articles () {
        return this.active !== null ? this.list[this.active].article : null
      }
    },
    methods: {
      getTags () {
        this.$graphql.query(`
          tags {
            ...tag
          }
        `, ['tag'])
        .then((res) => {
          this.list = res
        })
        .catch((err) => this.$toast(err.message, 'error'))
      },
      addTag () {
        this.$graphql.mutation(`
          addTag ($name) {
            ...tag
          }
        `, {
          name: this.name
        }, ['tag'])
        .then((res) => {
          this.$toast('添加成功', 'success')
          this.addModalShow = false
          this.getTags()
        })
        .catch((err) => this.$toast(err.message, 'error'))
      },
      editTag () {
        this.$graphql.mutation(`
          updateTag ($id, $name) {
            ...tag
          }
        `, {
          id: this.list[this.active]._id,
          name: this.name
        }, ['tag'])
        .then((res) => {
          this.$toast('添加成功', 'success')
          this.addModalShow = false
          this.list = res
        })
        .catch((err) => this.$toast(err.message, 'error'))
      },
      removeTag () {
        this.$graphql.mutation(`
          removeTag ($name) {
            ...tag
          }
        `, {
          name: this.activeTag
        }, ['tag'])
        .then((res) => {
          this.$toast('删除成功', 'success')
          this.active = null
          this.list = res
        })
        .catch((err) => this.$toast(err.message, 'error'))
      },
      clickTag (i) {
        this.active = i === this.active ? null : i
      },
      minusClick () {
        if (!this.activeTag) {
          return this.$toast('请先选中一个标签', 'warning')
        }
        this.$prompt('确定删除该标签吗？', this.removeTag)
      },
      openModal (type) {
        if (type === 'edit') {
          if (this.active === null) {
            return this.$toast('请选中一个需要编辑的标签', 'warning')
          }
          let { name } = this.list[this.active]
          this.name = name
        }
        else {
          this.name = ''
        }

        this.type = type
        this.addModalShow = true
      }
    },
    mounted () {
      this.getTags()
    }
  }
</script>

<style lang="scss">
  @import '~style';

  .admin-tag-view {
    position: relative;
    flex: 1;
    margin: 20px 0;
    display: flex;

    .tag-badge {
      display: inline-block;
      padding: 5px 12px;
      border: 2px solid $grey3;
      border-radius: 20px;
      cursor: pointer;
      transition: all .3s;
      margin-right: 10px;

      &:hover {
        border-color: $grey2;
      }

      &.active {
        color: $blue;
        border-color: $blue;
      }
    }

    .admin-main {
      flex-direction: column;
      align-items: baseline;
    }

    .tag-modal {
      @include flex-center(flex, column);

      button {
        margin-top: 20px;
        align-self: stretch;
      }
    }

    .tag-wrap, .article-wrap {
      padding: 20px;
      width: 100%;
      flex: 1;

      h1 {
        margin-bottom: 10px;
      }

      .article-link {
        display: block;
        margin-bottom: 10px;

        &.release {
          color: $green;
        }
      }
    }

    .article-wrap {
      background-color: $grey4;
    }
  }
</style>

