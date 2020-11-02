import React from 'react';
import './Directory.styles.scss';
import MenuItem from '../menu-item/MenuItem';

class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:8000/api/category/')
            const responseData = await response.json()
            console.log(responseData)
            this.setState({items: responseData})
        } catch(e) {
            console.log(e)
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.items.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} { ...otherSectionProps }/>
                ))}
            </div>
        )
    }
}
export default Directory;