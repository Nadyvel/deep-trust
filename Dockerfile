FROM continuumio/miniconda3:latest

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update && apt-get upgrade -y && apt-get install -qqy \
    wget \
    bzip2 \
    graphviz \
    libssl-dev \
    openssh-server \
    nodejs \
    npm

RUN apt-get install nano
#Frontend Docker
#RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && apt-get install -y nodejs && apt-get install -y npm

RUN npm install -g n


RUN mkdir /backend
RUN mkdir /scripts
RUN mkdir /static-files

COPY ./scripts /scripts

RUN chmod +x /scripts*


COPY ./backend /backend
RUN /opt/conda/bin/conda env create -f /backend/requirements.yml
ENV PATH /opt/conda/envs/deepTrust_django_app/bin:$PATH
RUN echo "source activate deepTrust_django_app" >~/.bashrc

WORKDIR /frontend
COPY ./frontend/package.json /frontend/
COPY ./frontend/package-lock.json /frontend/
RUN npm install
COPY ./frontend /frontend
RUN npm run build

WORKDIR /backend
