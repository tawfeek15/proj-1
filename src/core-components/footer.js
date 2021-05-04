import React from 'react'
class Footer extends React.Component{
    render(){
        return(
            <>
                <footer>
                    <p>© Copyright 2021 </p>
                </footer>
                <style jsx>
                    {
                        `
                        footer{background-color: #EEEEEE;text-align:center;padding:20px 15px}
                        `
                    }
                </style>
            </>
        )
    }
}
export default Footer