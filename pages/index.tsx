import { connect } from 'react-redux'
import { wrapper } from '../store/store'
import Link from 'next/link'
import { addPosts } from '../store/posts/action'
import { memo } from 'react'

import {
  StyleLink,
  List,
  Wrapper,
  Content,
  Title,
} from "./styled";

interface Post {
  postsList: string[] | number[],
  post: any,
  sortedPosts: string[] | number[],
}

const Index = ({ postsList} : Post) => {

  const sortedPosts: string[] | number[] = postsList.slice().sort((a : any, b : any) => (b.id - a.id));

  return (
  <>
    <Wrapper>
    <Title>BLOG</Title>
      <Link href={`/posts/new`}       
      >
        <StyleLink>Create new Post</StyleLink>
      </Link>
      <Content>
      <h1>Latest Posts</h1>
        {sortedPosts.map((post: any) => 
          <List key={post.id}>
            <Link href={`/posts/${post.id}`}
            >
              <a>{`<Post №${post.id}> ${post.title}`}</a>
            </Link>
          </List>
        )}
      </Content>
    </Wrapper>
  </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  return { props: { data: await store.dispatch(addPosts()) } }
})

const mapState = (state: any) => {
  return {postsList: state.posts.posts};
}

export default memo(connect(mapState, null)(Index))