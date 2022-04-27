import Router from 'next/router'








export const getServerSideProps = async (context) => {
    const res = await fetch(`http://localhost:3000/api/post/${context.params.id}`)
    const data = await res.json()
    return { props: { ...data } }
  }