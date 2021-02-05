(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(129)),o={title:"Experiment Implementation"},s={unversionedId:"designDocs/experiment-implementation",id:"designDocs/experiment-implementation",isDocsHomePage:!1,title:"Experiment Implementation",description:"\x3c!--",source:"@site/docs/designDocs/experiment-implementation.md",slug:"/designDocs/experiment-implementation",permalink:"/docs/designDocs/experiment-implementation",editUrl:"https://github.com/apache/submarine/edit/master/docs/docs/designDocs/experiment-implementation.md",version:"current",sidebar:"docs",previous:{title:"Environments Implementation",permalink:"/docs/designDocs/environments-implementation"},next:{title:"Notebook Implementation",permalink:"/docs/designDocs/notebook-implementation"}},l=[{value:"Overview",id:"overview",children:[]},{value:"API of Experiment",id:"api-of-experiment",children:[]},{value:"Manage environments for experiment",id:"manage-environments-for-experiment",children:[]},{value:"Manage storages for experiment",id:"manage-storages-for-experiment",children:[]},{value:"Manage Pre-defined experiment libraries",id:"manage-pre-defined-experiment-libraries",children:[]},{value:"Flow: Submit an experiment",id:"flow-submit-an-experiment",children:[{value:"Submit via SDK Flows.",id:"submit-via-sdk-flows",children:[]},{value:"Specify what environment to use",id:"specify-what-environment-to-use",children:[]},{value:"Create experiment, specify where&#39;s training code located, and parameters.",id:"create-experiment-specify-wheres-training-code-located-and-parameters",children:[]}]},{value:"Summarize: Experiment v.s. Notebook session",id:"summarize-experiment-vs-notebook-session",children:[]},{value:"Experiment-related modules inside Submarine-server",id:"experiment-related-modules-inside-submarine-server",children:[{value:"Experiment Manager",id:"experiment-manager",children:[]},{value:"Compute Cluster Manager",id:"compute-cluster-manager",children:[]},{value:"Experiment Submitter",id:"experiment-submitter",children:[]},{value:"Experiment Monitor",id:"experiment-monitor",children:[]},{value:"Invoke flows of experiment-related components",id:"invoke-flows-of-experiment-related-components",children:[]}]},{value:"Common modules of experiment/notebook-session/model-serving",id:"common-modules-of-experimentnotebook-sessionmodel-serving",children:[]},{value:"Support Predefined-experiment-templates",id:"support-predefined-experiment-templates",children:[{value:"Predefined-experiment-template API to run experiment",id:"predefined-experiment-template-api-to-run-experiment",children:[]},{value:"Handle Predefined-experiment-template from server side",id:"handle-predefined-experiment-template-from-server-side",children:[]}]}],m={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"This document talks about implementation of experiment, flows and design considerations."),Object(i.b)("p",null,"Experiment consists of following components, also interact with other Submarine or 3rd-party components, showing below: "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\n\n              +---------------------------------------+\n +----------+ |      Experiment Tasks                 |\n |Run       | |                                       |\n |Configs   | | +----------------------------------+  |\n +----------+ | |   Experiment Runnable Code       |  | +-----------------+\n +----------+ | |                                  |  | |Output Artifacts |\n |Input Data| | |     (Like train-job.py)          |  | |(Models, etc.)   |\n |          | | +----------------------------------+  | +-----------------+\n |          | | +----------------------------------+  |\n +----------+ | |   Experiment Deps (Like Python)  |  | +-------------+\n              | +----------------------------------+  | |Logs/Metrics |\n              | +----------------------------------+  | |             |\n              | |  OS, Base Libaries (Like CUDA)   |  | +-------------+\n              | +----------------------------------+  |\n              +---------------------------------------+\n                                 ^\n                                 | (Launch Task with resources)\n                                 +\n                 +---------------------------------+\n                 |Resource Manager (K8s/YARN/Cloud)|\n                 +---------------------------------+\n")),Object(i.b)("p",null,"As showing in the above diagram, Submarine experiment consists of the following items: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"On the left side, there're input data and run configs. "),Object(i.b)("li",{parentName:"ul"},"In the middle box, they're experiment tasks, it could be multiple tasks when we run distributed training, pipeline, etc. ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"There're main runnable code, such as ",Object(i.b)("inlineCode",{parentName:"li"},"train.py")," for the training main entry point. "),Object(i.b)("li",{parentName:"ul"},"The two boxes below: experiment dependencies and OS/Base libraries we called ",Object(i.b)("inlineCode",{parentName:"li"},"Submarine Environment Profile")," or  ",Object(i.b)("inlineCode",{parentName:"li"},"Environment")," for short. Which defined what is the basic libraries to run the main experiment code. "),Object(i.b)("li",{parentName:"ul"},"Experiment tasks are launched by Resource Manager, such as K8s/YARN/Cloud or just launched locally. There're resources constraints for each experiment tasks. (e.g. how much memory, cores, GPU, disk etc. can be used by tasks). "))),Object(i.b)("li",{parentName:"ul"},"On the right side, they're artifacts generated by experiments: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Output artifacts: Which are main output of the experiment, it could be model(s), or output data when we do batch prediction."),Object(i.b)("li",{parentName:"ul"},"Logs/Metrics for further troubleshooting or understanding of experiment's quality.")))),Object(i.b)("p",null,"For the rest of the design doc, we will talk about how we handle environment, code, and manage output/logs, etc."),Object(i.b)("h2",{id:"api-of-experiment"},"API of Experiment"),Object(i.b)("p",null,"This is not a full definition of experiment, for more details, please reference to experiment API. "),Object(i.b)("p",null,"Here's just an example of experiment object which help developer to understand what included in an experiment."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'experiment:\n       name: "abc",\n       type: "script",\n       environment: "team-default-ml-env"\n       code:\n           sync_mode: s3\n           url: "s3://bucket/training-job.tar.gz" \n       parameter: > python training.py --iteration 10 \n                    --input=s3://bucket/input output=s3://bucket/output\n       resource_constraint: \n           res="mem=20gb, vcore=3, gpu=2"\n       timeout: "30 mins"\n')),Object(i.b)("p",null,'This defined a "script" experiment, which has a name "abc", the name can be used to track the experiment. There\'s environment "team-default-ml-env" defined to make sure dependencies of the job can be downloaded properly before executing the job. '),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"code")," defined where the experiment code will be downloaded, we will support a couple of sync_mode like s3 (or abfs/hdfs), git, etc. "),Object(i.b)("p",null,"Different types of experiments will have different specs, for example distributed Tensorflow spec may look like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'experiment:\n       name: "abc-distributed-tf",\n       type: "distributed-tf",\n       ps: \n            environment: "team-default-ml-cpu"\n            resource_constraint: \n                 res="mem=20gb, vcore=3, gpu=0"\n       worker: \n            environment: "team-default-ml-gpu"\n            resource_constraint: \n                 res="mem=20gb, vcore=3, gpu=2"\n       code:\n           sync_mode: git\n           url: "https://foo.com/training-job.git" \n       parameter: > python /code/training-job/training.py --iteration 10 \n                    --input=s3://bucket/input output=s3://bucket/output\n       tensorboard: enabled\n       timeout: "30 mins"\n')),Object(i.b)("p",null,"Since we have different Docker image, one is using GPU and one is not using GPU, we can specify different environment and resource constraint."),Object(i.b)("h2",{id:"manage-environments-for-experiment"},"Manage environments for experiment"),Object(i.b)("p",null,"Please refer to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/designDocs/environments-implementation"}),"environment-implementation.md")," for more details"),Object(i.b)("h2",{id:"manage-storages-for-experiment"},"Manage storages for experiment"),Object(i.b)("p",null,"There're different types of storage, such as logs, metrics, dependencies (environments). For more details. Please refer to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/designDocs/storage-implementation"}),"storage-implementations")," for more details. This also includes how to manage code for experiment code."),Object(i.b)("h2",{id:"manage-pre-defined-experiment-libraries"},"Manage Pre-defined experiment libraries"),Object(i.b)("h2",{id:"flow-submit-an-experiment"},"Flow: Submit an experiment"),Object(i.b)("h3",{id:"submit-via-sdk-flows"},"Submit via SDK Flows."),Object(i.b)("p",null,"To better understand experiment implementation, It will be good to understand what is the steps of experiment submission."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Please note that below code is just pseudo code, not official APIs.")),Object(i.b)("h3",{id:"specify-what-environment-to-use"},"Specify what environment to use"),Object(i.b)("p",null,"Before submit the environment, you have to choose what environment to choose. Environment defines dependencies, etc. of an experiment or a notebook. might looks like below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'conda_environment = \n"""\n  name: conda-env\n  channels:\n    - defaults\n  dependencies:\n    - asn1crypto=1.3.0=py37_0\n    - blas=1.0=mkl\n    - ca-certificates=2020.1.1=0\n    - certifi=2020.4.5.1=py37_0\n    - cffi=1.14.0=py37hb5b8e2f_0\n    - chardet=3.0.4=py37_1003\n  prefix: /opt/anaconda3/envs/conda-env\n"""\n\n# This environment can be different from notebook\'s own environment\nenvironment = create_environment {\n    DockerImage = "ubuntu:16",\n    CondaEnvironment = conda_environment\n}\n')),Object(i.b)("p",null,"To better understand how environment works, please refer to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/designDocs/environments-implementation"}),"environment-implementation"),". "),Object(i.b)("h3",{id:"create-experiment-specify-wheres-training-code-located-and-parameters"},"Create experiment, specify where's training code located, and parameters."),Object(i.b)("p",null,"For  ad-hoc experiment (code located at S3), assume training code is part of the ",Object(i.b)("inlineCode",{parentName:"p"},"training-job.tar.gz")," and main class is ",Object(i.b)("inlineCode",{parentName:"p"},"train.py"),". When the job is launched, whatever specified in the localize_artifacts will be downloaded."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'experiment = create_experiment {\n    Environment = environment, \n    ExperimentConfig = {\n       type = "adhoc",\n       localize_artifacts = [\n            "s3://bucket/training-job.tar.gz"\n       ],\n       name = "abc",\n       parameter = "python training.py --iteration 10 --input="s3://bucket/input output="s3://bucket/output",\n    }\n}\nexperiment.run()\nexperiment.wait_for_finish(print_output=True)\n')),Object(i.b)("h5",{id:"run-notebook-file-in-offline-mode"},"Run notebook file in offline mode"),Object(i.b)("p",null,"It is possible we want to run a notebook file in offline mode, to do that, here's code to use to run a notebook code"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'experiment = create_experiment {\n    Environment = environment, \n    ExperimentConfig = {\n       type = "adhoc",\n       localize_artifacts = [\n            "s3://bucket/folder/notebook-123.ipynb"\n       ],\n       name = "abc",\n       parameter = "runipy training.ipynb --iteration 10 --input="s3://bucket/input output="s3://bucket/output",\n    }\n}\nexperiment.run()\nexperiment.wait_for_finish(print_output=True)\n')),Object(i.b)("h5",{id:"run-pre-defined-experiment-library"},"Run pre-defined experiment library"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'experiment = create_experiment {\n    # Here you can use default environment of library\n    Environment = environment, \n    ExperimentConfig = {\n       type = "template",\n       name = "abc",\n       # A unique name of template \n       template = "deepfm_ctr", \n       # yaml file defined what is the parameters need to be specified.\n       parameter = {\n           Input: "S3://.../input",\n           Output: "S3://.../output"\n           Training: {\n              "batch_size": 512,\n              "l2_reg": 0.01,\n              ...\n           }\n       }\n    }\n}\nexperiment.run()\nexperiment.wait_for_finish(print_output=True)\n')),Object(i.b)("h2",{id:"summarize-experiment-vs-notebook-session"},"Summarize: Experiment v.s. Notebook session"),Object(i.b)("p",null,"There's a common misunderstanding about what is the differences between running experiment v.s. running task from a notebook session. We will talk about differences and commonalities:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Differences")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Experiment"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Notebook Session"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Run mode"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Offline"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Interactive")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Output Artifacts (a.k.a model)"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Persisted in a shared storage (like S3/NFS)"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Local in the notebook session container, could be ephemeral")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Run history (meta, logs, metrics)"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Meta/logs/metrics can be traced from experiment UI (or corresponding API)"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No run history can be traced from Submarine UI/API. Can view the current running paragraph's log/metrics, etc.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"What to run?"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Code from Docker image or shared storage (like Tarball on S3, Github, etc.)"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Local in the notebook's paragraph")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Commonalities")," "),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Experiment & Notebook Session"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Environment"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"They can share the same Environment configuration")))),Object(i.b)("h2",{id:"experiment-related-modules-inside-submarine-server"},"Experiment-related modules inside Submarine-server"),Object(i.b)("p",null,"(Please refer to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/designDocs/submarine-server/architecture"}),"architecture of submarine server")," for more details)"),Object(i.b)("h3",{id:"experiment-manager"},"Experiment Manager"),Object(i.b)("p",null,"The experiment manager receives the experiment requests, persisting the experiment metas in a database(e.g. MySQL), will invoke subsequence modules to submit and monitor the experiment's execution."),Object(i.b)("h3",{id:"compute-cluster-manager"},"Compute Cluster Manager"),Object(i.b)("p",null,"After experiment accepted by experiment manager, based on which cluster the experiment intended to run (like mentioned in the previous sections, Submarine supports to manage multiple compute clusters), compute cluster manager will returns credentials to access the compute cluster. It will also be responsible to create a new compute cluster if needed. "),Object(i.b)("p",null,"For most of the on-prem use cases, there's only one cluster involved, for such cases, ComputeClusterManager returns credentials to access local cluster if needed. "),Object(i.b)("h3",{id:"experiment-submitter"},"Experiment Submitter"),Object(i.b)("p",null,"Experiment Submitter handles different kinds of experiments to run (e.g. ad-hoc script, distributed TF, MPI, pre-defined templates, Pipeline, AutoML, etc.). And such experiments can be managed by different resource management systems (e.g. K8s, YARN, container cloud, etc.)"),Object(i.b)("p",null,"To meet the requirements to support variant kinds of experiments and resource managers, we choose to use plug-in modules to support different submitters (which requires jars to submarine-server\u2019s classpath). "),Object(i.b)("p",null,"To avoid jars and dependencies of plugins break the submarine-server, the plug-ins manager, or both. To solve this issue, we can instantiate submitter plug-ins using a classloader that is different from the system classloader."),Object(i.b)("h4",{id:"submitter-plug-ins"},"Submitter Plug-ins"),Object(i.b)("p",null,"Each plug-in uses a separate module under the server-submitter module. As the default implements, we provide for YARN and K8s. For YARN cluster, we provide the submitter-yarn and submitter-yarnservice plug-ins. The submitter-yarn plug-in used the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/linkedin/TonY"}),"TonY")," as the runtime to run the training job, and the submitter-yarnservice plug-in direct use the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://hadoop.apache.org/docs/stable/hadoop-yarn/hadoop-yarn-site/yarn-service/Overview.html"}),"YARN Service")," which supports  Hadoop v3.1 above. "),Object(i.b)("p",null,"The submitter-k8s plug-in is used to submit the job to Kubernetes cluster and use the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/"}),"operator")," as the runtime. The submitter-k8s plug-in implements the operation of CRD object and provides the java interface. In the beginning, we use the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/kubeflow/tf-operator"}),"tf-operator")," for the TensorFlow."),Object(i.b)("p",null,"If Submarine want to support the other resource management system in the future, such as submarine-docker-cluster (submarine uses the Raft algorithm to create a docker cluster on the docker runtime environment on multiple servers, providing the most lightweight resource scheduling system for small-scale users). We should create a new plug-in module named submitter-docker under the server-submitter module."),Object(i.b)("h3",{id:"experiment-monitor"},"Experiment Monitor"),Object(i.b)("p",null,"The monitor tracks the experiment life cycle and records the main events and key info in runtime. As the experiment run progresses, the metrics are needed for evaluation of the ongoing success or failure of the execution progress. Due to adapt the different cluster resource management system, so we need a generic metric info structure and each submitter plug-in should inherit and complete it by itself."),Object(i.b)("h3",{id:"invoke-flows-of-experiment-related-components"},"Invoke flows of experiment-related components"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{})," +-----------------+  +----------------+ +----------------+ +-----------------+\n |Experiments      |  |Compute Cluster | |Experiment      | | Experiment      |\n |Mgr              |  |Mgr             | |Submitter       | | Monitor         |\n +-----------------+  +----------------+ +----------------+ +-----------------+\n          +                    +                  +                  +\n User     |                    |                  |                  |\n Submit   |+-------------------------------------\x3e+                  +\n Xperiment|          Use submitter.validate(spec) |                  |\n          |          to validate spec and create  |                  |\n          |          experiment object (state-    |                  |\n          |          machine).                    |                  |\n          |                                       |                  |\n          |          The experiment manager will  |                  |\n          |          persist meta-data to Database|                  |\n          |                    |                  |                  |\n          |                    |                  +                  +\n          |+-----------------\x3e +                  |                  |\n          |  Submit Experiments|                  |                  |\n          |   To ComputeCluster|                  |                  |\n          |   Mgr, get existing|+----------------\x3e|                  |\n          |   cluster, or      |  Use Submitter   |                  |\n          |   create a new one.|  to submit       |+---------------\x3e |\n          |                    |  Different kinds |  Once job is     |\n          |                    |  of experiments  |  submitted, use  |+----+\n          |                    |  to k8s/yarn, etc|  monitor to get  |     |\n          |                    |                  |  status updates  |     |\n          |                    |                  |                  |     | Monitor\n          |                    |                  |                  |     | Xperiment\n          |                    |                  |                  |     | status\n          |                    |                  |                  |     |\n          |<--------------------------------------------------------+|     |\n          |                    |                  |                  |     |\n          |                  Update Status back to Experiment        |     |\n          |                    |      Manager     |                  |<----+\n          |                    |                  |                  |\n          |                    |                  |                  |\n          |                    |                  |                  |\n          v                    v                  v                  v\n")),Object(i.b)("p",null,"TODO: add more details about template, environment, etc."),Object(i.b)("h2",{id:"common-modules-of-experimentnotebook-sessionmodel-serving"},"Common modules of experiment/notebook-session/model-serving"),Object(i.b)("p",null,"Experiment/notebook-session/model-serving share a lot of commonalities, all of them are: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Some workloads running on YARN/K8s."),Object(i.b)("li",{parentName:"ul"},"Need persist meta data to DB. "),Object(i.b)("li",{parentName:"ul"},"Need monitor task/service running status from resource management system. ")),Object(i.b)("p",null,"We need to make their implementation are loose-coupled, but at the same time, share some building blocks as much as possible (e.g. submit PodSpecs to K8s, monitor status, get logs, etc.) to reduce duplications."),Object(i.b)("h2",{id:"support-predefined-experiment-templates"},"Support Predefined-experiment-templates"),Object(i.b)("p",null,"Predefined Experiment Template is just a way to save data-scientists time to repeatedly entering parameters which is not error-proof and user experience is also bad."),Object(i.b)("h3",{id:"predefined-experiment-template-api-to-run-experiment"},"Predefined-experiment-template API to run experiment"),Object(i.b)("p",null,"Predefined experiment template consists a list of parameters, each of the parameter has 4 properties:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Key"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default Value"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Name of the key"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"true/false"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"When required = false, a default value can be provided by the template"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Description of the parameter")))),Object(i.b)("p",null,"For the example of deepfm CTR training experiment mentioned in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/designDocs/architecture-and-requirements"}),"architecture-and-requirements.md")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n  "input": {\n    "train_data": ["hdfs:///user/submarine/data/tr.libsvm"],\n    "valid_data": ["hdfs:///user/submarine/data/va.libsvm"],\n    "test_data": ["hdfs:///user/submarine/data/te.libsvm"],\n    "type": "libsvm"\n  },\n  "output": {\n    "save_model_dir": "hdfs:///user/submarine/deepfm",\n    "metric": "auc"\n  },\n  "training": {\n    "batch_size" : 512,\n    "field_size": 39,\n    "num_epochs": 3,\n    "feature_size": 117581,\n    ...\n  }\n}\n')),Object(i.b)("p",null,"The template will be (in yaml format):"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# deepfm.ctr template\nname: deepfm.ctr\nauthor: \ndescription: >\n  This is a template to run CTR training using deepfm algorithm, by default it runs\n  single node TF job, you can also overwrite training parameters to use distributed\n  training. \n  \nparameters: \n  - name: input.train_data\n    required: true \n    description: >\n      train data is expected in SVM format, and can be stored in HDFS/S3 \n    ...\n  - name: training.batch_size\n    required: false\n    default: 32 \n    description: This is batch size of training\n")),Object(i.b)("p",null,"The batch format can be used in UI/API. "),Object(i.b)("h3",{id:"handle-predefined-experiment-template-from-server-side"},"Handle Predefined-experiment-template from server side"),Object(i.b)("p",null,"Please note that, the conversion of predefined-experiment-template will be always handled by server. The invoke flow looks like: "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\n                         +------------Submarine Server -----------------------+\n   +--------------+      |  +-----------------+                               |\n   |Client        |+-------\x3e|Experimment Mgr  |                               |\n   |              |      |  |                 |                               |\n   +--------------+      |  +-----------------+                               |\n                         |          +                                         |\n          Submit         |  +-------v---------+       Get Experiment Template |\n          Template       |  |Experiment       |<-----+From pre-registered     |\n          Parameters     |  |Template Registry|       Templates               |\n          to Submarine   |  +-------+---------+                               |\n          Server         |          |                                         |\n                         |  +-------v---------+       +-----------------+     |\n                         |  |Deepfm CTR Templ-|       |Experiment-      |     |\n                         |  |ate Handler      +------\x3e|Tensorflow       |     |\n                         |  +-----------------+       +--------+--------+     |\n                         |                                     |              |\n                         |                                     |              |\n                         |                            +--------v--------+     |\n                         |                            |Experiment       |     |\n                         |                            |Submitter        |     |\n                         |                            +--------+--------+     |\n                         |                                     |              |\n                         |                                     |              |\n                         |                            +--------v--------+     |\n                         |                            |                 |     |\n                         |                            | ......          |     |\n                         |                            +-----------------+     |\n                         |                                                    |\n                         +----------------------------------------------------+\n")),Object(i.b)("p",null,"Basically, from Client, it submitted template parameters to Submarine Server, inside submarine server, it finds the corresponding template handler based on the name. And the template handler converts input parameters to an actual experiment, such as a distributed TF experiment. After that, it goes the similar route to validate experiment spec, compute cluster manager, etc. to get the experiment submitted and monitored. "),Object(i.b)("p",null,"Predefined-experiment-template is able to create any kind of experiment, it could be a pipeline: "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\n   +-----------------+                  +------------------+\n   |Template XYZ     |                  | XYZ Template     |\n   |                 |+---------------\x3e | Handler          |\n   +-----------------+                  +------------------+\n                                                   +\n                                                   |\n                                                   |\n                                                   |\n                                                   |\n                                                   v\n             +--------------------+      +------------------+\n             | +-----------------+|      | Predefined       |\n             | |  Split Train/   ||<----+| Pipeline         |\n             | |  Test data      ||      +------------------+\n             | +-------+---------+|\n             |         |          |\n             | +-------v---------+|\n             | |  Spark Job ETL  ||\n             | |                 ||\n             | +-------+---------+|\n             |         |          |\n             | +-------v---------+|\n             | | Train using     ||\n             | | XGBoost         ||\n             | +-------+---------+|\n             |         |          |\n             | +-------v---------+|\n             | | Validate Train  ||\n             | | Results         ||\n             | +-----------------+|\n             |                    |\n             +--------------------+\n")),Object(i.b)("p",null,"Template can be also chained to reuse other template handlers"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\n   +-----------------+                  +------------------+\n   |Template XYZ     |                  | XYZ Template     |\n   |                 |+---------------\x3e | Handler          |\n   +-----------------+                  +------------------+\n                                                   +\n                                                   |\n                                                   v\n               +------------------+      +------------------+\n               |Distributed       |      | ABC Template     |\n               |TF Experiment     |<----+| Handler          |\n               +------------------+      +------------------+\n")),Object(i.b)("p",null,"Template Handler is a callable class inside Submarine Server with a standard interface defined like."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"interface ExperimentTemplateHandler {\n   ExperimentSpec createExperiment(TemplatedExperimentParameters param)\n}\n")),Object(i.b)("p",null,"We should avoid users to do coding when they want to add new template, we should have several standard template handler to deal with most of the template handling."),Object(i.b)("p",null,"Experiment templates can be registered/updated/deleted via Submarine Server's REST API, which need to be discussed separately in the doc. (TODO)"))}p.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),p=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,d=c["".concat(o,".").concat(u)]||c[u]||b[u]||i;return n?a.a.createElement(d,s(s({ref:t},m),{},{components:n})):a.a.createElement(d,s({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);