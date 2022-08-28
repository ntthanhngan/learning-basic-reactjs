import React from "react";
import ChildComponent from "./ChildComponent";
import FormComponent from "./FormComponent";

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'job1', pos: 'dev', salary: '500' },
            { id: 'job2', pos: 'tester', salary: '1000' },
            { id: 'job3', pos: 'project manager', salary: '2000' }
        ]
    }
    addNewJob = (job) => {
        console.log('check job from parent: ', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    deleteJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }

    render() {
        console.log(">>> call render: ", this.state)
        return (
            <>
                <FormComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent;