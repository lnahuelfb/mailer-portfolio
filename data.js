const projects = [
  {
    title: 'Rick and Morty API',
    description: 'Una aplicación donde se puede ver la información de los personajes de Rick and Morty',
    img: 'https://previews.dropbox.com/p/thumb/ABiu7K4DWlStkfTV8JWL7v7bk7AmuusZ6iezMdWeCpeYvsrxSh0oXnJrS-kVs_w-EjfAd3zYSqj2WsaTPi27SE8VrY5cRRw4_fPVUAigEdAdfCBrr5DvI3P12bUTIE_RSAERf4ww1MWkVTaFnN170Qw3k1s9wx5xjUrdpT7OsSESR1SD0h8uU7jXM8DalYBEUKfq-OIrcN8MaJ8opKxZQ-zNPv7InGYV2XMHFbQ2lEn1YO4PCSa8Jw-bVbNgozMndt0e5FnK8A-L1WNLn82pNJL0kxQ2gCs2Qyu7nrNUdVYi90PRDssqPqxocm_SFB78ohNfiSBlebEqkCxw5iIdk6f9ycBPmPMoHp4DLS9UmeTN4Jw9C-8T-Wdjk_REjj8R_DA/p.png',
    github: 'https://github.com/lnahuelfb/rick-and-morty',
    link: 'https://rick-and-morty-app-lnahuelfb.vercel.app/',
    technologies: 'Hecho con: HTML, CSS, React y React Context'
  },
  {
    title: 'ToDo List',
    description: 'Una aplicación donde se puede crear, editar y eliminar tareas',
    img: 'https://previews.dropbox.com/p/thumb/ABgCB84GQXY5oZnZaQ4XC7kezrtKKOUPY2US5FU0bXD9IfnNVtBtqX0tvZwHNsuoMTj0zQxDZ6Vc5ByR34nzvjfJQ1-AjxLIbgfmZUXhzde4lGOmd6c_uIU8zbUCE9ih0z589ehLqNEgvXIHw-hILKgEjIhAVH5MRGbTgn1l1M_OzKucR6kEbmQ-TfTXT9h2TY4SNLKaLMWoP9vbYboJj3VQLSPbNYhlz0mXfINQrSiGLiHOoGG509FWr29Sxj252xuR_QZZBChnSf1Uwu1wWSzo7vhPrUeyj3l9CZJKywCEgcSdwUeUTtF1TnJkw41WfDwgDcvcWIVCIcN803aSeqq03nnUEGy9mwCAkgH45L9G9Crl3284OJ-1n59zytsShmY/p.png',
    github: 'https://github.com/lnahuelfb/toDoList-fullstack-backend',
    technologies: 'Hecho con: HTML, CSS, React, React Context, NodeJS, Express, MongoDB'
  },
  {
    title: 'PokeRandom-JS',
    description: 'Es la misma app que PokeRandom pero con Vanila JS',
    img: 'https://previews.dropbox.com/p/thumb/ABiZbgjGBxtbuOT8PdRqcN9DAX_PAfPz3ql7dAG11AnqizMQZrYzSLMmj6MYbNqz8MFv_VRel71DevkeFJPVJST7KrnDsuRwreY_QXFFiwUvE1Bjk-WmsonRcxOuEkLXLtShEYArcM3JivcGk_Fkh1gzKFE2vcknYrpcE3TteaG2G79Y-t9CepSsxooKnuu_CXPqSbh57aZdP7jUw8xfv_vatGnnnX8PEshMX50Yg4M4mNwEI0_T9pKxHLAXsKR_jGUlfSLba_4Ag6a8OjFdAy9FEf3FiJzVmt2ctA3Zx25DPr2tc7azVDCpCTg73b-b947XesHLUd0AotfSHPoCTgMD_bi10nSAbkcmMZuyRjsoRak0ZgtGkFZ3oqZWAT294jc/p.png',
    github: 'https://github.com/lnahuelfb/PokeRandom-js-vanila',
    link: 'https://pokerandom-js.netlify.app/',
    technologies: 'Hecho con: HTML, CSS y JavaScript'
  },
  {
    title: 'PokeRandom-React',
    description: 'Una aplicación donde al tocar un boton te devuelve un pokemon al azar',
    img: 'https://previews.dropbox.com/p/thumb/ABiZbgjGBxtbuOT8PdRqcN9DAX_PAfPz3ql7dAG11AnqizMQZrYzSLMmj6MYbNqz8MFv_VRel71DevkeFJPVJST7KrnDsuRwreY_QXFFiwUvE1Bjk-WmsonRcxOuEkLXLtShEYArcM3JivcGk_Fkh1gzKFE2vcknYrpcE3TteaG2G79Y-t9CepSsxooKnuu_CXPqSbh57aZdP7jUw8xfv_vatGnnnX8PEshMX50Yg4M4mNwEI0_T9pKxHLAXsKR_jGUlfSLba_4Ag6a8OjFdAy9FEf3FiJzVmt2ctA3Zx25DPr2tc7azVDCpCTg73b-b947XesHLUd0AotfSHPoCTgMD_bi10nSAbkcmMZuyRjsoRak0ZgtGkFZ3oqZWAT294jc/p.png',
    github: 'https://github.com/lnahuelfb/PokeRandom-React',
    technologies: 'Hecho con: HTML, Styled Components, JS y React'
  },
]

const technologies = [
  {
    name: 'HTML',
    img: 'https://previews.dropbox.com/p/thumb/ABiKY7tO7w8IjOSAhs0kF88CBr6AM6UAhj0kEe7Obrm5zlg4ufpVAf40i85vMldXgyRlIVhIWXKQM_iJxV_Zj4M0vsRmi5xdtdDDczqjdnwF0FkqfJsJ8CPa7KLqfLJ4nZIx3SNeSLoTLRgbiteqYcIfmF5aiAOdN7MUJss7xStcuBCoV-vlTlp4qNUY7De8J10Ajg6oOZkZEcIP5G7T-GzdQifM6GcotX6ivdyYLn2eDU0THtumG5m-55yaRv2ztjz_fehdzUceprS8_CgzdEt2zcL9TyRopgF4gZ_IapqKDXfjINwVrgSCQxtOGu1VSv4tQoVLXSZZ43OHcnj62ya2DvxmQh8gsVvGyB8nTUF2k2pLS0oocKxJACq-c3TUgp8/p.png',
  },
  {
    name: 'CSS',
    img: 'https://previews.dropbox.com/p/thumb/ABhdP1A8tOeRxjCmDTnMVNLBAdSQc1X1nQeXqxmZ-ttbJH1TxywsHrFouFiRDL4EjTeBBP8cpduiwEcHMwGo3NX1rT-7VUGZHPo44A3eq95uYILAHqlpo99dYgtj-UBb0z4n5Y6F4gWaCx1eB4SA79sFkUzoUdWEwyMkHzSDyJoBpAIU5XBZ3M_taQice2B07YmWKldN-ylz8Zi_erT1J5ZTxVu5xNuM99pMPm59rd0riSnkpjGUN_Dtp5t-ij4X18dWGATVgoHMd13TiZgmhX8OU87rxk2UK1mySiTTVU9QlbBlhUeWHjgFkpzHgR3KUj3GfGfV2FipVi1U8esGntqopF-2v38fNPMxUoVAC1Oclv0lxhbWP8EvI_FO0SpbPKo/p.png',
  },
  {
    name: 'JavaScript',
    img: 'https://previews.dropbox.com/p/thumb/ABjYFEK6MmXga0djz4Lj6-h9GC4hFzXYvLqutS1-VmOyvA7Fr3fIZlmrzNjBJMSy5FGwulzGCUGwAeRj-28qfIJ0nsXjxCcQnBSUi2ifv5eC_tuXVi-CgfPz_3YqAXoobcLf273DWfOCwnUwDJ0oZsln2IQHDx-0Dsw2gJeNH3a39vF9PLjrdFgnpGG2WhejRU3zlLpzDAx7b-rA5lzUXx6NHnzyBDFv_y0M2h9tMu2E6F8j_Ihw0DsBd_TxrwP2kOdCcJkoV1KJxJEXhfK1UuDVTMZxS7JRRSAWlCvjNPOXKejNTV6UIJQ-MfrmKx5HxE2-yrN63ZJC8G-8HKjSlA8LOyNkmdktNifZ_ri0TztyKR3hKo31zXM3Pq6y8LotDWE/p.png',
  },
  {
    name: 'React',
    img: 'https://previews.dropbox.com/p/thumb/ABixC-t7JbkNdx5IP6-f6803iVFUCodjmMb0Vaf6bq1X8DCe2pGjcE-y5I9lfppvHAtbpDF_MjorSe06loPmJQHXLyvLUKNbGjxVBbT3C4kcF6OVI4IHHSo7ICuO1SeqnDXDLVA9fG4hBReyFZ_GbbaP0rZLUr0BBcGXcrU-Cz1LXYlk5qgSxhndoHdaKwrHQrba0MSlEohFxJrtcCopHUa05pNZPE5TujyNSI1nxAoTDBKcNCnj_aGY4WaGHy7WP3zoWkHzzE3erZJ9oS97-tBMvKz_JYLK-GoRdxiojXUmffFOAVJX8YOKddtjAq9b2y8M8xJb0vlnsT2IT7UfomEf4xLxqqJXkanCdYo-vZ_xczXdYl7OiwcSAuYcpJzss9c/p.png',
  },
  {
    name: 'NodeJS',
    img: 'https://previews.dropbox.com/p/thumb/ABhELD6zkCCY0b5NzLqMsb6JI4X1tcPlwZvIxFlHD5DMuGG1FuBBueH9hXQrjHMHDpVUgtLV_lKPgXVGrDxn-9hVD18PpwXAfk4qsoyZy5XfQ1Kh8L4E6VgEwXeErjFbjLnshiAEqCAEo1nP7EfnI-6BAxB5VwGCV7aXw8lCs4otiDGn9E9zTqgdD5m8dSYMXZeh1JSIg0Vw7nCL8ThjfmWNJSe_KHA6bXUtuBlmdFXs2SgsNypEx5cwTEi5VO4EuWQJ0pTCnyG6xt9Eg03wA_bcv8ObbMYZzd78GmI1rwdI1j-Le6I5b1Xiq9kaxf1C0dx58elceBObuLTy-lgv1cGHABcaOQvC7vpMKwZV1xpnX8NAvp2Wb7Fv59tTtp38RFw/p.png',
  },
  {
    name: 'Express',
    img: 'https://previews.dropbox.com/p/thumb/ABiY6VmTbf8WH44ENE3YhaT4ceZ9Q7MiohlNRCDl_tKFAWyiZw2WtOCyFYyBVyyQDWNSNTe0niUDo3QUllhqsQEoenf3Jd77orXbQAGf371ebY5XZ_qxo_l-jKpuX9pqmeI9s_i3DZNexVoIhE-dx46ydX0y3vlECTftWIuYgSUqDH_CKn7qS3m2Kbe8Wi2fWyP62n1I-XP3YpVAnj2Al3_K6lZ3rcIQ833_C_Akxb7pWql11EdRJgb2P2ojUSdtJjyF1iOamvxgrRNXUM5sbEjDWydfvPmKo5Cnx-ehf07G_773sVSnb8oBe6NNh99dPFy8e7P2gO1hukTRq7jWx2LhDIb-n7t43zynZmZGzJJ69v4PzzUHXIqKrpOHQHi-REA/p.png',
  },
  {
    name: 'PostgreSQL',
    img: 'https://previews.dropbox.com/p/thumb/ABhvFO5zMyiJ_KffqCDjtBDayB9UNTuK4ukAXaKfjzLVJt3MqqnhZYeWnpeY40mkKLRHScINzqLlp1wqvzzRA5-3r_mGFoDU2gydZG1X50qgx1RhKd2xN2pgyItyMb89pCh8xFQPMq8u4pGqmEF42JNV0biSxVT1L5t5L8amhC6gaDeXxRqlMV7BYWC6OPePUTb7WZ82Ldbx37wYcnr70n4Y_CYJm-t8EMHdq1I75zJOWJK3-K_oIbSs8enAo0O9oXFcUOhsmB0IPmFP1a0MobHAb66bttQ9Fzo7z3686KSJDZwLCKOaff3hzvAcyzmGOmcT1JGdCV_4IwXMsKiqMMQpFBcQAZFX4q7bDqEs7jV4gDofMIOYITVXREK4ym2L1aE/p.png',
  },
  {
    name: 'Sequelize',
    img: 'https://previews.dropbox.com/p/thumb/ABi0AX0neYBhQr-DGgeu3FCtQ0bvbmP8Wi-jWteoJ4PXP1MABAkocOKdCoxa2NDdOpjBngWyixrsxuDEbIU7fFXebzcGwYGxoEpaxV3agWf0qiifmpg1ZxZt7j58WqyLy4kitqJZ3uIFAJX-0NmUUmjnIzqqCdHb8WArZdSbXhIPHXcLBXAmewEVtvGcksFl8mSZdX7WPVUNFJ98Tbl599tEy_jhg9lBh-6ENF1HV0mpgwPeuhqRCYPvhXum_b_d3hPs0WKMHuf-xFMS1aW9GOiqmLXmp8RV70Ec7aeT5wDLMLHVu9apRzHCdrLvhVkxcyJSfY5u5Te_navvgDOypI3Dr7gFWFSjcE4WuGELlf6aGanQhKcBX8E8znKOLWHbagY/p.png',
  },
  {
    name: 'MongoDB',
    img: 'https://previews.dropbox.com/p/thumb/ABjqMjuJdmzcWyWXkK1cKR35jiIBxmVZDUhi0355PZOKNaMwor2UCP2L41NshCgk7o_hbAtlWOQbtEu2aGWZ1P5e-_juzZHTGB0p9E4SmznODQh2lDN1WAn03wWMT8WLQ4VgiAcGR88-TR-vLJ0inUMQloi_KN-xdHcoLHKGrBFVK_zZ6HTenNF3Coypf0oM2TkDLNdMdEPjW5amxQ9GXAyiym3Ovo_QayfmU4D8-FE2049BFVHVtxDIJw7vkh7AbThr6HFCeNWsXjl1pNNgqQWfQU_H4xCKl-aZ_ANRncZqbuaUyZTQEWAtI1FqKSCU4ZPZs_M8OrpxE-QERBtRMYbp2oEqk71D-dF9Qm0IlPfitZ9ky8CjjP8N0s8IqwECbT8/p.png',
  }
]

module.exports = {
  projects,
  technologies
}