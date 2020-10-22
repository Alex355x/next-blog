import { connect } from 'react-redux'
import { wrapper } from '../store/store'
import Link from 'next/link'
import { addPosts } from '../store/posts/action'


import {
  StyleLink,
  List,
  Wrapper,
  Content,
  Title,
} from "./styled";


const Index = ({ postsList}) => {
 
  const sortedPosts = postsList.slice().sort((a, b) => (b.id - a.id));

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
        {sortedPosts.map(post => 
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

const mapState = (state) => {
  return {postsList: state.posts.posts};
}

export default connect(mapState, null)(Index)