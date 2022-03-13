import React from 'react';

import { Switch, Route} from 'react-router-dom';

const Projects = () => {
  // const history = useHistory();

  // const loadFeaturedStory = id => history.push(`/news/${id}`)
  
  // const params = useParams();

  // // function NewsPost() {
  // //   let { id } = useParams();
  // //   console.log(id);
  // //   return <h1>Now showing News {id}</h1>;
  // // }
 
  return(
    <div >
      {/* <h1>Our favourite Songs</h1> */}

      {/* <aside>
        <Greeting />

        <ReaderCount />
      
        <img src="https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="newspapers"/>

      </aside> */}

      <section>
        <Switch>
            <Route exact path={"/projects"}>
            {/* <h1> This is the news page  </h1> */}
            <h2>Work in progress. Come back soon.</h2>
            {/* <Headlines />   */}
              {/* <Headlines handleSelect={loadFeaturedStory}/> */}
            </Route>
            
            {/* Dynamic route params */}
            <Route path={"/projects/:id"}>
            <>Hello news id</>
            {/* <Songs /> */}
            {/* <NewsPost /> */}

            </Route>
        </Switch>
      </section>

    </div>
  );

};

export default Projects;
