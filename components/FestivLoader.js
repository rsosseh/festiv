import React from 'react';

class FestivLoader extends React.Component{
	render(){
        const { isLoading } = this.props;
		return(
			<div>	
				{isLoading && 
                    <div id="festiv__loader">
                        <img src="/Loading_icon.gif" />
                    </div>
                }
			</div>
		);
	}
}

export default FestivLoader;