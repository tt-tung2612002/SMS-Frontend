import { FilterDropdown, useTable } from "@refinedev/antd";
import { getDefaultFilter } from "@refinedev/core";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import {
  EnvironmentOutlined,
  GlobalOutlined,
  MailOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Card, Col, Input, Row, Select, Space, Table } from "antd";
import cn from "classnames";

import { CustomAvatar, Logo, Text } from "@/components";
import { User } from "@/graphql/schema.types";
import { AdministrationUsersQuery } from "@/graphql/types";

import { RoleTag } from "./components";
import { ADMINISTRATION_USERS_QUERY } from "./queries";
import styles from "./settings.module.css";

export const SettingsPage = () => {};
