import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnClickDelete = (job) => {
        console.log('>>> Data was deleted: ', job)
        this.props.deleteJob(job)
    }
    render() {
        let { arrJobs } = this.props
        let { showJobs } = this.state
        return (
            <>
                {
                    showJobs === false ?
                        <div>
                            <button onClick={() => this.handleShowHide()}>show</button>
                        </div>
                        :
                        <>
                            <div className="job-list">
                                {
                                    arrJobs.map((item, index) => {

                                        return (
                                            <div key={item.id}>
                                                {item.pos} - {item.salary} &nbsp;
                                                <span onClick={() => { this.handleOnClickDelete(item) }}>x</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <button onClick={() => this.handleShowHide()}>hide</button>
                            </div>
                        </>
                }
            </>
        )
    }
}

export default ChildComponent;