#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { InfrastructureEngineerStack } from '../lib/infrastructure_engineer-stack';

const app = new cdk.App();
new InfrastructureEngineerStack(app, 'InfrastructureEngineerStack');
