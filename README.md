# `Learn React With Harshi 👩🏻‍💻 Series`
   Documenting my learning journey of [Namaste React Live Course](https://learn.namastedev.com/) conducted by Akshay Saini

## Class Summary `Chapter - 06 Exploring the world` (14/01/2023)

Until last chapter, we were using mock data to render the UI. In this chapter, we learnt about working with real time data from the Web (Our world basically). Then, we covered different types of System Architectures, different approaches to fetch API and render in UI. Today's important concept was one of the basic React Hooks `useEffect`. We tried using useEffect in all combinations and understanding it in depth. Importance of conditional rendering and Shimmer in UI were explained. 


One line about this chapter : `React is called react because it reacts to every state change and renders only the component in which the state is present` 

Check out [Chapter-06 Live](https://learn-react-with-harshi-chapter-06.netlify.app/) for the live demo of this chapter's coding assignment `(InstaFood Version 2.0)`. Also check out the following chapters to see how InstaFood has progressed. Happy Reacting !!!


If you are interested in other chapters of this series, please browse through the [my repositories](https://github.com/orgs/Learn-React-With-Harshi/repositories)




collect all the files and make it into one application ==>bundling

one js file for 1000 of components then size of js file increaed a lot
when js file is too large then its lot of time to load Home Page

when you are building a large scale application then you have to break down in smaller pieces.

solution is we have to make smaller bundes of this file. This process is known as chunking or code splitting or dynamic bundling or lazy loading or on demand loading.
makemytrip eg

lazy loading
we will not load everything, but we will load lazy loading when require